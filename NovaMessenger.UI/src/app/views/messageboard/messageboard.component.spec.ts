import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoardComponent } from './messageboard.component';

describe('HomeComponent', () => {
  let component: MessageBoardComponent;
  let fixture: ComponentFixture<MessageBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
