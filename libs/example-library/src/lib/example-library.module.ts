import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOnePipe } from './add-one.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [AddOnePipe],
  exports: [AddOnePipe]
})
export class ExampleLibraryModule {
}
