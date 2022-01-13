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

const showNewGoal = () => {
  NiceModal.show("GoalNewModal");
};

export {
  showNewTaskModal,
  showNewActivityModal,
  showFullModal,
  showNewGoal
}