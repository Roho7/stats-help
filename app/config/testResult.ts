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
  },
  {
    name: "T-Test Between",
    nature: "ordinal",
    param: "parametric",
    iv_number: 1,
    iv_levels: 2,
    subjects_rel: "between_subjects" || "within_subjects",
  },

  {
    name: "One Way Anova",
    nature: "ordinal" || "interval",
    param: "parametric",
    iv_number: 1,
    iv_levels: 3,
    subjects_rel: "within_subjects" || "between_subjects",
  },
  {
    name: "One Way Anova",
    nature: "ordinal",
    param: "parametric",
    iv_number: 1,
    iv_levels: 3,
    subjects_rel: "between_subjects",
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
    nature: "interval",
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
    name: "Pearsons",
    nature: "interval",
    param: "parametric",
    iv_number: 1,
    iv_levels: 2,
    subjects_rel: "within_subjects",
  },
  {
    name: "Pearsons",
    nature: "interval",
    param: "parametric",
    iv_number: 1,
    iv_levels: 2,
    subjects_rel: "between_subjects",
  },
  {
    name: "Spearman",
    nature: "interval",
    param: "non_parametric",
    iv_number: 1,
    iv_levels: 2,
    subjects_rel: "within_subjects",
  },
  {
    name: "Spearman",
    nature: "interval",
    param: "non_parametric",
    iv_number: 1,
    iv_levels: 2,
    subjects_rel: "between_subjects",
  },
];
