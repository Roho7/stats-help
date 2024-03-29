import { TestDataType } from "../stats/[id]/page";

export const TestResults: TestDataType[] = [
  {
    name: "Wilcoxon Signed Ranked Test",
    nature: "ordinal",
    param: "non_parametric",
    iv_number: 1,
    iv_levels: 2,
    subjects_rel: "within_subjects",
  },
  {
    name: "Mann-Whitney U Test",
    nature: "ordinal",
    param: "non_parametric",
    iv_number: 1,
    iv_levels: 2,
    subjects_rel: "between_subjects",
    video:
      "https://www.youtube.com/watch?v=BT1FKd1Qzjw&t=190s&pp=ygUXbWFud2hpdG5leSByYW5rIGJ5IGhhbmQ%3D",
  },
  {
    name: "T-Test Between",
    nature: "ordinal",
    param: "parametric",
    iv_number: 1,
    iv_levels: 2,
    subjects_rel: "between_subjects",
    link: "/ttestbetween",
  },
  {
    name: "T-Test Within",
    nature: "ordinal",
    param: "parametric",
    iv_number: 1,
    iv_levels: 2,
    subjects_rel: "within_subjects",
    link: "/ttestwithin",
    video: "https://www.youtube.com/watch?v=BPbHujvA9UU",
  },

  {
    name: "Friedman Test",
    nature: "ordinal",
    param: "non_parametric",
    iv_number: 1,
    iv_levels: 3,
    subjects_rel: "within_subjects",
    link: "/friedman",
  },
  {
    name: "Kruskal-Wallis",
    nature: "ordinal",
    param: "non_parametric",
    iv_number: 1,
    iv_levels: 3,
    subjects_rel: "between_subjects",
    video: "https://www.youtube.com/watch?v=q1D4Di1KWLc",
  },
  {
    name: "One Way Anova",
    nature: "ordinal",
    param: "parametric",
    iv_number: 1,
    iv_levels: 3,
    subjects_rel: "within_subjects",
    video: "https://www.youtube.com/watch?v=WUjsSB7E-ko",
  },
  {
    name: "One Way Anova",
    nature: "ordinal",
    param: "parametric",
    iv_number: 1,
    iv_levels: 3,
    subjects_rel: "between_subjects",
    video: "https://www.youtube.com/watch?v=WUjsSB7E-ko",
  },
  {
    name: "Two Way Anova",
    nature: "ordinal",
    param: "parametric",
    iv_number: 2,
    iv_levels: 3,
    subjects_rel: "between_subjects",
  },

  {
    name: "Two Way Anova",
    nature: "ordinal",
    param: "parametric",
    iv_number: 2,
    iv_levels: 3,
    subjects_rel: "within_subjects",
  },
  {
    name: "Two Way Anova",
    nature: "interval",
    param: "parametric",
    iv_number: 2,
    iv_levels: 3,
    subjects_rel: "within_subjects",
  },
  {
    name: "Pearson's Correlation Coefficient",
    nature: "interval",
    param: "parametric",
    iv_number: 1,
    iv_levels: 2,
    subjects_rel: "within_subjects",
  },
  {
    name: "Pearson's Correlation Coefficient",
    nature: "interval",
    param: "parametric",
    iv_number: 1,
    iv_levels: 2,
    subjects_rel: "between_subjects",
  },
  {
    name: "Spearman's Rank Correlation Coefficient",
    nature: "interval",
    param: "non_parametric",
    iv_number: 1,
    iv_levels: 2,
    subjects_rel: "within_subjects",
    video: "https://www.youtube.com/watch?v=DE58QuNKA-c",
  },
  {
    name: "Spearman's Rank Correlation Coefficient",
    nature: "interval",
    param: "non_parametric",
    iv_number: 1,
    iv_levels: 2,
    subjects_rel: "between_subjects",
    video: "https://www.youtube.com/watch?v=DE58QuNKA-c",
  },
];
