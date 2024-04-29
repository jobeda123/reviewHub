import { create } from "zustand";
// types
import { TFeedbackItem, TStore } from "../lib/types";
// utils
import { getCompanyName } from "../utils/functions";

// hook
export const useFeedbackItemsStore = create<TStore>((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  errorMessage: "",
  selectedCompany: "",

  addItemToList: async (text: string) => {
    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text,
      upVoteCount: 0,
      daysAgo: 0,
      // created: new Date(),
      company: getCompanyName(text),
      badgeLetter: "B",
    };

    set((state) => ({
      feedbackItems: [...state.feedbackItems, newItem],
    }));

    try {
      const fetchResponse = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        }
      );

      console.log({ fetchResponse });
    } catch (error) {
      console.log({ error });
    }
  },

  selectCompany: (company: string) => {
    set(() => ({ selectedCompany: company }));
  },

  fetchFeedbackItems: async () => {
    try {
      //   setIsLoading(true);
      set(() => ({ isLoading: true }));

      const fetchResponse = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      if (!fetchResponse.ok) {
        throw new Error();
      }

      const fetchData = await fetchResponse.json();

      // setFeedbackItems(fetchData.feedbacks);
      // setIsLoading(false);
      set(() => ({
        feedbackItems: [...fetchData.feedbacks],
        isLoading: false,
      }));
    } catch (error) {
      // network error, not 2xx range response, or JSON parsing error

      // setErrorMessage("Something went wrong. Please try again later.");
      set(() => ({
        errorMessage: "Something went wrong. Please try again later.",
      }));

      console.log({ error });
    }
    // setIsLoading(false);
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
}));
