import NiceModal from "@ebay/nice-modal-react";

const showNewTaskModal = (goalId: string) => {
  NiceModal.show("TaskNewModal", { goalId });
};

const showNewActivityModal = (goalId: string) => {
  NiceModal.show("ActivityNewModal", { goalId });
};

const showFullModal = () => {
  NiceModal.show("TaskFullModal", { taskId: "123" });
};

export {
  showNewTaskModal,
  showNewActivityModal,
  showFullModal
}