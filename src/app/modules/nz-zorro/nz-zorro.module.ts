import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzListModule } from 'ng-zorro-antd/list';

const MODULES: any = [
  NzLayoutModule,
  NzMenuModule,
  NzBreadCrumbModule,
  NzIconModule,
  NzFormModule,
  NzAvatarModule,
  NzDropDownModule,
  NzNotificationModule,
  NzSelectModule,
  NzInputModule,
  NzButtonModule,
  NzCheckboxModule,
  NzTabsModule,
  NzRateModule,
  NzCardModule,
  NzTableModule,
  NzDividerModule,
  NzSwitchModule,
  NzTagModule,
  NzCardModule,
  NzRadioModule,
  NzTagModule,
  NzTableModule,
  NzProgressModule,
  NzDividerModule,
  NzBadgeModule,
  NzTimelineModule,
  NzCardModule,
  NzRateModule,
  NzBadgeModule,
  NzProgressModule,
  NzTableModule,
  NzDividerModule,
  NzPaginationModule,
  NzListModule

];

@NgModule({
  declarations: [],
  imports: [CommonModule, MODULES],
  exports: [MODULES]
})
export class NzZorroModule {}
