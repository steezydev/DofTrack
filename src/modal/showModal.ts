import NiceModal from "@ebay/nice-modal-react";

const showNewTaskModal = (goalId: string) => {
  NiceModal.show("TaskNewModal", { goalId });
};

const showNewActivityModal = (goalId: string) => {
  NiceModal.show("ActivityNewModal", { goalId });
};

const showFullModal = (taskId: string, goalId: string) => {
  NiceModal.show("TaskFullModal", { taskId, goalId });
};

const showNewGoal = (dreamId?: string, dreamTitle?: string) => {
  NiceModal.show("GoalNewModal", {dreamId, dreamTitle});
};

const showSignIn = () => {
  NiceModal.show("SignInModal");
};

const showSignUp = () => {
  NiceModal.show("SignUpModal");
};


export {
  showNewTaskModal,
  showNewActivityModal,
  showFullModal,
  showNewGoal,
  showSignIn,
  showSignUp
}