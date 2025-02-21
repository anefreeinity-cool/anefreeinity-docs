import { ISubTopic } from "./subtopic-model";

export interface ITopicData {
  id: number;
  name: string;
  Children: ISubTopic[];
}
