import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-helpmodal',
  templateUrl: 'helpmodal.component.html',
  standalone: true,
  imports: [IonicModule]
})
export class HelpmodalComponent{
  @ViewChild(IonModal) modal!: IonModal;
  isModalOpen = false;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name = '';

  constructor(){}
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}