import NiceModal from "@ebay/nice-modal-react";

export const showNewTaskModal = (goalId: string) => {
  NiceModal.show("TaskNewModal", { goalId });
};

export const showNewActivityModal = (goalId: string) => {
  NiceModal.show("ActivityNewModal", { goalId });
};

export const showFullModal = (taskId: string, goalId: string) => {
  NiceModal.show("TaskFullModal", { taskId, goalId });
};

export const showNewGoal = (dreamId?: string, dreamTitle?: string) => {
  NiceModal.show("GoalNewModal", {dreamId, dreamTitle});
};

export const showNewDream = () => {
  NiceModal.show("DreamNewModal");
};

export const showSignIn = () => {
  NiceModal.show("SignInModal");
};

export const showSignUp = () => {
  NiceModal.show("SignUpModal");
};
