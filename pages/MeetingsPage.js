export class MeetingsPage {
  constructor(page) {
    this.page = page;

    this.calendarMenu= page.locator('a').filter({ hasText: 'Calendar' });
    
    
    this.scheduleMeeting=page.getByRole('link', { name: 'Schedule Meeting' });
    this.meetingMenu=page.locator('a').nth(1);
    this.subject=page.locator('iframe').contentFrame().locator('#name');
    

    this.startDate=page.locator('iframe').contentFrame().locator('#date_start_date');
    this.endDate=page.locator('iframe').contentFrame().locator('#date_end_date');
    
    this.calendarIcon=page.locator('iframe').contentFrame().locator('#date_start_trigger');
    this.monthSelect=page.locator('iframe').contentFrame().getByLabel('Choose Month');
    this.yearInput=page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Enter Year' });


    this.startHourInput=page.locator('iframe').contentFrame().locator('#date_start_hours');
    this.startMinuteInput=page.locator('iframe').contentFrame().locator('#date_start_minutes');
    this.endHourInput=page.locator('iframe').contentFrame().locator('#date_end_hours');
    this.endMinuteInput=page.locator('iframe').contentFrame().locator('#date_end_minutes');
    this.durationInput=page.locator('iframe').contentFrame().locator('#duration_hours');
    
    this.popupCheckbox=page.locator('iframe').contentFrame().locator('#reminder_view').getByText('Popup');
    this.popupTimer=page.locator('iframe').contentFrame().locator('.reminder_item > div:nth-child(5) > .timer_sel_popup');
    this.emailInviteesCheckbox=page.locator('iframe').contentFrame().getByRole('checkbox').nth(1);
    this.emailTimer=page.locator('iframe').contentFrame().locator('.reminder_item > div:nth-child(6) > .timer_sel_email');

    this.addInviteesButton=page.locator('iframe').contentFrame().getByRole('button', { name: 'Add Invitees' });
    this.removeReminderButton=page.locator('iframe').contentFrame().locator('.reminder_item > div:nth-child(7) > .btn_remove');
    this.addRemindersButton=page.locator('iframe').contentFrame().getByRole('button', { name: 'Add Reminders' });

    this.descriptionInput=page.locator('iframe').contentFrame().locator('#description');

    this.otherbutton=page.locator('iframe').contentFrame().getByText('OTHER');

    //Add Invitess

    this.firstNameInviteesInput=page.locator('iframe').contentFrame().locator('#first_name');
    this.lastNameInviteesInput=page.locator('iframe').contentFrame().locator('#last_name');
    this.emailInviteesInput=page.locator('iframe').contentFrame().locator('#email');
    this.searchInviteesButton=page.locator('iframe').contentFrame().locator('#search_invitees');

    this.searchInviteesButton=page.locator('iframe').contentFrame().getByRole('button', { name: 'Save', description: 'Save [Alt+a]' });

    

    this.saveMeetingButton=page.locator('iframe').contentFrame().getByRole('button', { name: 'Save', description: 'Save [Alt+a]' });
      }

  async hoverOverMeeting() {
    await this.calendarMenu.waitFor({ state: 'visible' });
    await this.calendarMenu.hover();
  }


  async clickScheduleMeeting() {
    await this.scheduleMeeting.click();
  }

    async enterSubject(subject) {
        await this.subject.fill(String(subject));
    
  }



  async saveMeeting(){
   await this.saveMeetingButton.click();
   }

   async visibleMeetingCreated(title) {
    return this.page.locator('iframe').contentFrame().getByRole('heading', { name: title })
   
   }
   async startDateInput(date) {
      await this.startDate.fill(date);
      
   
  }
  async enterStartDate(date) {
    await this.startDate.fill(date);
  }

  //  async quoteHeading(title) {
  //   return this.page
  //     .locator("iframe")
  //     .contentFrame()
  //     .getByRole("heading", { name: title });
  // }
}