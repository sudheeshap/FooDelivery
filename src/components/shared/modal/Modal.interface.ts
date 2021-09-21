export interface ModalProps {
  title: string;
  isOpen: boolean;
  children: string;
  onAfterOpen: Function;
  onRequestClose: Function;
}
