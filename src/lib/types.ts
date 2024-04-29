export type TFeedbackItem = {
  id: number;
  upVoteCount: number;
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

export type TStore = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  selectedCompany: string;

  addItemToList: (text: string) => Promise<void>;
  selectCompany: (company: string) => void;
  fetchFeedbackItems: () => Promise<void>;
  getCompanyList: () => string[];
  getFilteredFeedbackItems: () => TFeedbackItem[];
};
