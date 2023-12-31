import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEditorComponent } from './blog-editor.component';

describe('BlogEditorComponent', () => {
  let component: BlogEditorComponent;
  let fixture: ComponentFixture<BlogEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogEditorComponent]
    });
    fixture = TestBed.createComponent(BlogEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
