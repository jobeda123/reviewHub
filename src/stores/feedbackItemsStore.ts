import { create } from "zustand";
// types
import { TFeedbackItem, TStore } from "../lib/types";
// utils
import { getCompanyBadge, getCompanyName } from "../utils/functions";
// messages
import { messages } from "../resources/messages";

// base url
const baseUrl = import.meta.env.VITE_BASE_URL;

// hook
export const useFeedbackItemsStore = create<TStore>((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  message: "",
  messageType: "",
  selectedCompany: "",

  addItemToList: async (text: string) => {
    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: getCompanyName(text),
      badgeLetter: getCompanyBadge(text),
    };

    set((state) => ({
      feedbackItems: [...state.feedbackItems, newItem],
    }));

    try {
      const response = await fetch(`${baseUrl}/feedbacks`, {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        set(() => ({
          message: messages.created,
          messageType: "success",
        }));
      }
    } catch (error) {
      console.log({ error });

      set(() => ({
        message: messages.wentWrong,
        messageType: "error",
      }));
    }
  },

  selectCompany: (company: string) => {
    set(() => ({ selectedCompany: company }));
  },

  fetchFeedbackItems: async () => {
    try {
      set(() => ({ isLoading: true }));

      const fetchResponse = await fetch(`${baseUrl}/feedbacks`);
      if (!fetchResponse.ok) {
        throw new Error();
      }

      const fetchData = await fetchResponse.json();

      set(() => ({
        feedbackItems: [...fetchData.feedbacks],
        isLoading: false,
        message: messages.clear,
      }));
    } catch (error) {
      set(() => ({
        message: messages.wentWrong,
        messageType: "error",
      }));
    }
    set(() => ({
      isLoading: false,
    }));
  },

  getCompanyList: () => {
    return get()
      .feedbackItems.map((item: TFeedbackItem) => item.company)
      .filter((company: string, index: number, array: string[]) => {
        return array.indexOf(company) === index;
      });
  },

  getFilteredFeedbackItems: () => {
    const state = get();

    return state.selectedCompany
      ? state.feedbackItems.filter(
          (feedbackItem: TFeedbackItem) =>
            feedbackItem.company === state.selectedCompany
        )
      : get().feedbackItems;
  },

  closeMessagePopup: () => {
    set(() => ({
      message: "",
      messageType: "success",
    }));
  },

  updateMessage: (message: string, isError: boolean) => {
    set(() => ({
      message: message,
      messageType: isError ? "error" : "success",
    }));
  },

  clearFilter: () => {
    set(() => ({
      selectedCompany: "",
    }));
  },
}));
