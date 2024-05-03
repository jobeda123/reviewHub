export type TFeedbackItem = {
  id: number;
  upvoteCount: number;
  company: string;
  text: string;
  daysAgo: number;
  created?: Date;
  badgeLetter: string;
};

export type TFeedbackFormProps = {
  onAddToList: (text: string) => void;
};

export type FeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};

export type TContainerProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  handleAddToList: (text: string) => void;
  fetchFeedbackItems: () => void;
};

export type THeaderProps = {
  handleAddToList: (text: string) => void;
};

export type TFeedbackListProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  fetchFeedbackItems: () => void;
};

export type THashtagItemProps = {
  company: string;
  onSelectCompany: (company: string) => void;
};

export type TErrorMessage = { message: string };

export type TMessageType = "success" | "error";

export type TMessage = {
  message: string;
  type: string;
  // type: TMessageType;
  onClose: () => void;
};

export type TStore = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  message: string;
  messageType: string;
  selectedCompany: string;

  addItemToList: (text: string) => Promise<void>;
  selectCompany: (company: string) => void;
  fetchFeedbackItems: () => Promise<void>;
  clearFilter: () => void;
  getCompanyList: () => string[];
  getFilteredFeedbackItems: () => TFeedbackItem[];
  closeMessagePopup: () => void;
  updateMessage: (message: string, isError: boolean) => void;
};
