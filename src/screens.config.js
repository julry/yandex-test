

import {
  analyticsImage1,
  analyticsImage2,
  communicationImage1,
  communicationImage2,
  entrepreneurImage1,
  entrepreneurImage2,
  intellectImage1, intellectImage2, presenterImage1,
  presenterImage2

} from './constants/images';
import Intro from "./components/Intro";
import Question1 from "./components/Questions/Question1";
import Question2 from "./components/Questions/Question2";
import Question3 from "./components/Questions/Question3";
import Question4 from "./components/Questions/Question4";
import Question5 from "./components/Questions/Question5";
import Question6 from "./components/Questions/Question6";
import Question7 from "./components/Questions/Question7";
import Question8 from "./components/Questions/Question8";
import Final from "./components/Final";

export const ScreenType = {
  Intro: 'intro',
  Question: 'question',
  Final: 'final',
  Loading: 'loading',
};

export const screens = [
  {
    name: 'intro',
    component: Intro,
    type: ScreenType.Intro,
  },
  {
    name: 'question-1',
    component: Question1,
    type: ScreenType.Question,
  },
  {
    name: 'question-2',
    component: Question2,
    type: ScreenType.Question,
  },
  {
    name: 'question-3',
    component: Question3,
    type: ScreenType.Question,
  },
  {
    name: 'question-4',
    component: Question4,
    type: ScreenType.Question,
  },
  {
    name: 'question-5',
    component: Question5,
    type: ScreenType.Question,
  },
  {
    name: 'question-6',
    component: Question6,
    type: ScreenType.Question,
  },
  {
    name: 'question-7',
    component: Question7,
    type: ScreenType.Question,
  },
  {
    name: 'question-8',
    component: Question8,
    type: ScreenType.Question,
    preloadImages: [analyticsImage1,
      analyticsImage2,
      communicationImage1,
      communicationImage2,
      entrepreneurImage1,
      entrepreneurImage2,
      intellectImage1,
      intellectImage2,
      presenterImage1,
      presenterImage2]
  },
  {
    name: 'final',
    component: Final,
    type: ScreenType.Final,
    images:[
      analyticsImage1,
      analyticsImage2,
      communicationImage1,
      communicationImage2,
      entrepreneurImage1,
      entrepreneurImage2,
      intellectImage1,
      intellectImage2,
      presenterImage1,
      presenterImage2
    ]
  },
];