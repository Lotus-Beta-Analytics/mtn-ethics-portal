import { TrainingCategoryEnum } from "../enums/TrainingCategoryEnum";

export interface TrainingType {
  TrainingTitle: string;
  Category: TrainingCategoryEnum;
  Video: string;
}
