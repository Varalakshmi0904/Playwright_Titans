# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\documents.feature.spec.js >> Document Page- Functional Validation >> Create a new document
- Location: .features-gen\features\documents.feature.spec.js:10:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.hover: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a').filter({ hasText: /^Documents$/ })
    - locator resolved to <a href="#/documents" class="nav-link action-link ng-star-inserted">…</a>
  - attempting hover action
    2 × waiting for element to be visible and stable
      - element is not visible
    - retrying hover action
    - waiting 20ms
    - waiting for element to be visible and stable
    - element is not visible
  - retrying hover action
    - waiting 100ms
    - waiting for element to be visible and stable
  - element was detached from the DOM, retrying
    - locator resolved to <a href="#/documents" class="nav-link action-link ng-star-inserted">…</a>
  - attempting hover action
    2 × waiting for element to be visible and stable
      - element is not visible
    - retrying hover action
    - waiting 20ms
    2 × waiting for element to be visible and stable
      - element is not visible
    - retrying hover action
      - waiting 100ms
    18 × waiting for element to be visible and stable
       - element is not visible
     - retrying hover action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e6]:
        - list [ref=e9]:
          - listitem [ref=e10]:
            - link [ref=e11]:
              - /url: "#/home"
        - list [ref=e18]:
          - listitem [ref=e19]:
            - generic [ref=e20]: Accounts
          - listitem [ref=e27]:
            - generic [ref=e28]: Contacts
          - listitem [ref=e35]:
            - generic [ref=e36]: Opportunities
        - list [ref=e45]:
          - listitem [ref=e46]:
            - generic [ref=e47]: More
      - generic [ref=e49]:
        - list [ref=e51]:
          - listitem [ref=e52]:
            - generic "Quick Create" [ref=e53] [cursor=pointer]
        - list [ref=e60]:
          - listitem [ref=e61]:
            - generic "Recently Viewed" [ref=e62] [cursor=pointer]
        - generic [ref=e72]:
          - textbox "Search" [ref=e73]:
            - /placeholder: Search...
          - button "Search" [ref=e75] [cursor=pointer]
      - list [ref=e85]:
        - listitem [ref=e86]
    - iframe [ref=e98]:
      - generic [ref=f2e1]:
        - iframe [ref=f2e2]
        - generic [ref=f2e5]:
          - generic [ref=f2e6]:
            - list [ref=f2e7]:
              - link "SUITECRM DASHBOARD" [ref=f2e8] [cursor=pointer]:
                - /url: "#tab_content_0"
              - text: 
              - listitem [ref=f2e9]:
                - link "ACTIONS" [ref=f2e10] [cursor=pointer]:
                  - /url: "#"
                  - text: ACTIONS
                  - generic [ref=f2e11]: 
            - table [ref=f2e16]:
              - rowgroup [ref=f2e17]:
                - row [ref=f2e18]:
                  - cell [ref=f2e19]:
                    - list [ref=f2e20]:
                      - listitem [ref=f2e21]
                      - listitem [ref=f2e22]:
                        - generic [ref=f2e23]:
                          - table [ref=f2e26]:
                            - rowgroup [ref=f2e27]:
                              - row [ref=f2e28]:
                                - cell " My Calls" [ref=f2e29]:
                                  - generic [ref=f2e30]:
                                    - generic [ref=f2e31]: 
                                    - generic [ref=f2e32]: My Calls
                                - cell [ref=f2e33]:
                                  - generic [ref=f2e34]:
                                    - link "Refresh SuiteCRM Dashlet" [ref=f2e35]:
                                      - /url: javascript:void(0)
                                    - link "Edit SuiteCRM Dashlet" [ref=f2e36]:
                                      - /url: javascript:void(0)
                                    - link "Delete SuiteCRM Dashlet" [ref=f2e42]:
                                      - /url: javascript:void(0)
                          - table [ref=f2e49]:
                            - rowgroup [ref=f2e50]:
                              - row [ref=f2e51]:
                                - columnheader "Close" [ref=f2e52]
                                - columnheader [ref=f2e54]:
                                  - generic [ref=f2e55]:
                                    - link "Subject" [ref=f2e56]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e57]:
                                      - img [ref=f2e58]: Created with Sketch.
                                - columnheader "Related to" [ref=f2e63]
                                - columnheader [ref=f2e65]:
                                  - generic [ref=f2e66]:
                                    - link "Start Date" [ref=f2e67]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e68]:
                                      - img [ref=f2e69]: Created with Sketch.
                                - columnheader "Accept?" [ref=f2e74]
                                - columnheader [ref=f2e76]:
                                  - generic [ref=f2e77]:
                                    - link "Status" [ref=f2e78]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e79]:
                                      - img [ref=f2e80]: Created with Sketch.
                                - cell [ref=f2e85]
                            - rowgroup [ref=f2e86]:
                              - row [ref=f2e87]:
                                - cell "" [ref=f2e88]:
                                  - generic "Close" [ref=f2e90]: 
                                - cell [ref=f2e92]:
                                  - link "Left a message" [ref=f2e94]:
                                    - /url: ../#/calls/record/2aa52805-4e04-4eec-9b8c-9751f16d8a49?offset=1&stamp=1790829803085602400
                                - cell [ref=f2e95]:
                                  - link "Airline Maintenance Co" [ref=f2e96]:
                                    - /url: ../#/accounts/record/8265e402-7af6-4fd4-849a-aa9f3afa3c8c?offset=1&stamp=1790829803085602400
                                - cell "2026-12-25 07:00" [ref=f2e97]
                                - cell "Accepted" [ref=f2e98]
                                - cell "Planned" [ref=f2e99]
                                - cell [ref=f2e100]:
                                  - link "" [ref=f2e101]:
                                    - /url: ../#/calls/edit/2aa52805-4e04-4eec-9b8c-9751f16d8a49?offset=1&stamp=1790829803085602400&return_module=Home&return_action=index
                                  - link "" [ref=f2e103]:
                                    - /url: ../#/calls/record/2aa52805-4e04-4eec-9b8c-9751f16d8a49?offset=1&stamp=1790829803085602400&return_module=Home&return_action=index
                              - row [ref=f2e105]:
                                - cell "" [ref=f2e106]:
                                  - generic "Close" [ref=f2e108]: 
                                - cell [ref=f2e110]:
                                  - link "Bad time, will call back" [ref=f2e112]:
                                    - /url: ../#/calls/record/5f5848bf-1c5a-4711-b977-68a5a47c57e2?offset=2&stamp=1790829803085602400
                                - cell [ref=f2e113]:
                                  - link "Draft Diversified Energy Inc" [ref=f2e114]:
                                    - /url: ../#/accounts/record/02eb98c5-37f4-4697-9eb5-c89ab880b93f?offset=2&stamp=1790829803085602400
                                - cell "2027-01-20 12:00" [ref=f2e115]
                                - cell "Accepted" [ref=f2e116]
                                - cell "Planned" [ref=f2e117]
                                - cell [ref=f2e118]:
                                  - link "" [ref=f2e119]:
                                    - /url: ../#/calls/edit/5f5848bf-1c5a-4711-b977-68a5a47c57e2?offset=2&stamp=1790829803085602400&return_module=Home&return_action=index
                                  - link "" [ref=f2e121]:
                                    - /url: ../#/calls/record/5f5848bf-1c5a-4711-b977-68a5a47c57e2?offset=2&stamp=1790829803085602400&return_module=Home&return_action=index
                              - row [ref=f2e123]:
                                - cell "" [ref=f2e124]:
                                  - generic "Close" [ref=f2e126]: 
                                - cell [ref=f2e128]:
                                  - link "Get more information on the proposed deal" [ref=f2e130]:
                                    - /url: ../#/calls/record/a9979d3d-1ecd-48e6-b1d0-b2aac4766b8d?offset=3&stamp=1790829803085602400
                                - cell [ref=f2e131]:
                                  - link "A.G. Parr PLC" [ref=f2e132]:
                                    - /url: ../#/accounts/record/e4b45584-8c87-4726-929f-973b29544803?offset=3&stamp=1790829803085602400
                                - cell "2026-10-19 17:30" [ref=f2e133]
                                - cell "Accepted" [ref=f2e134]
                                - cell "Planned" [ref=f2e135]
                                - cell [ref=f2e136]:
                                  - link "" [ref=f2e137]:
                                    - /url: ../#/calls/edit/a9979d3d-1ecd-48e6-b1d0-b2aac4766b8d?offset=3&stamp=1790829803085602400&return_module=Home&return_action=index
                                  - link "" [ref=f2e139]:
                                    - /url: ../#/calls/record/a9979d3d-1ecd-48e6-b1d0-b2aac4766b8d?offset=3&stamp=1790829803085602400&return_module=Home&return_action=index
                              - row [ref=f2e141]:
                                - cell "" [ref=f2e142]:
                                  - generic "Close" [ref=f2e144]: 
                                - cell [ref=f2e146]:
                                  - link "Discuss review process" [ref=f2e148]:
                                    - /url: ../#/calls/record/ec1c4fe6-823c-44a7-81b8-c52efd760824?offset=4&stamp=1790829803085602400
                                - cell [ref=f2e149]:
                                  - link "Dirt Mining Ltd" [ref=f2e150]:
                                    - /url: ../#/accounts/record/b6d7a81d-fa8c-43cf-8d2b-4c01e3b9e238?offset=4&stamp=1790829803085602400
                                - cell "2026-11-18 09:00" [ref=f2e151]
                                - cell "Accepted" [ref=f2e152]
                                - cell "Planned" [ref=f2e153]
                                - cell [ref=f2e154]:
                                  - link "" [ref=f2e155]:
                                    - /url: ../#/calls/edit/ec1c4fe6-823c-44a7-81b8-c52efd760824?offset=4&stamp=1790829803085602400&return_module=Home&return_action=index
                                  - link "" [ref=f2e157]:
                                    - /url: ../#/calls/record/ec1c4fe6-823c-44a7-81b8-c52efd760824?offset=4&stamp=1790829803085602400&return_module=Home&return_action=index
                              - row [ref=f2e159]:
                                - cell "" [ref=f2e160]:
                                  - generic "Close" [ref=f2e162]: 
                                - cell [ref=f2e164]:
                                  - link "Discuss review process" [ref=f2e166]:
                                    - /url: ../#/calls/record/35bc8d8b-19c7-465a-903c-f639d5f2b417?offset=5&stamp=1790829803085602400
                                - cell [ref=f2e167]:
                                  - link "Sandeon Consolidation Corp" [ref=f2e168]:
                                    - /url: ../#/accounts/record/fcd8e7fe-d1e6-4430-af52-2c60fcb94b10?offset=5&stamp=1790829803085602400
                                - cell "2027-01-05 17:00" [ref=f2e169]
                                - cell "Accepted" [ref=f2e170]
                                - cell "Planned" [ref=f2e171]
                                - cell [ref=f2e172]:
                                  - link "" [ref=f2e173]:
                                    - /url: ../#/calls/edit/35bc8d8b-19c7-465a-903c-f639d5f2b417?offset=5&stamp=1790829803085602400&return_module=Home&return_action=index
                                  - link "" [ref=f2e175]:
                                    - /url: ../#/calls/record/35bc8d8b-19c7-465a-903c-f639d5f2b417?offset=5&stamp=1790829803085602400&return_module=Home&return_action=index
                              - row [ref=f2e177]:
                                - cell [ref=f2e178]:
                                  - table [ref=f2e179]:
                                    - rowgroup [ref=f2e180]:
                                      - row [ref=f2e181]:
                                        - cell [ref=f2e182]
                                        - cell "(1 - 5 of 7)" [ref=f2e183]:
                                          - button "Start" [disabled] [ref=f2e184] [cursor=pointer]
                                          - button "Previous" [disabled] [ref=f2e191] [cursor=pointer]
                                          - button "Next" [ref=f2e199] [cursor=pointer]
                                          - button "End" [ref=f2e206] [cursor=pointer]
                      - listitem [ref=f2e213]:
                        - generic [ref=f2e214]:
                          - table [ref=f2e217]:
                            - rowgroup [ref=f2e218]:
                              - row [ref=f2e219]:
                                - cell " My Meetings" [ref=f2e220]:
                                  - generic [ref=f2e221]:
                                    - generic [ref=f2e222]: 
                                    - generic [ref=f2e223]: My Meetings
                                - cell [ref=f2e224]:
                                  - generic [ref=f2e225]:
                                    - link "Refresh SuiteCRM Dashlet" [ref=f2e226]:
                                      - /url: javascript:void(0)
                                    - link "Edit SuiteCRM Dashlet" [ref=f2e227]:
                                      - /url: javascript:void(0)
                                    - link "Delete SuiteCRM Dashlet" [ref=f2e233]:
                                      - /url: javascript:void(0)
                          - table [ref=f2e240]:
                            - rowgroup [ref=f2e241]:
                              - row [ref=f2e242]:
                                - columnheader "Close" [ref=f2e243]
                                - columnheader [ref=f2e245]:
                                  - generic [ref=f2e246]:
                                    - link "Subject" [ref=f2e247]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e248]:
                                      - img [ref=f2e249]: Created with Sketch.
                                - columnheader "Related to" [ref=f2e254]
                                - columnheader [ref=f2e256]:
                                  - generic [ref=f2e257]:
                                    - link "Start Date" [ref=f2e258]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e259]:
                                      - img [ref=f2e260]: Created with Sketch.
                                - columnheader "Accept?" [ref=f2e265]
                                - cell [ref=f2e267]
                            - rowgroup [ref=f2e268]:
                              - row [ref=f2e269]:
                                - cell "" [ref=f2e270]:
                                  - generic "Close" [ref=f2e272]: 
                                - cell [ref=f2e274]:
                                  - link "Review needs" [ref=f2e276]:
                                    - /url: ../#/meetings/record/0716b2d4-c355-426f-8b2c-8e5c58152d20?offset=1&stamp=1790829803093509800
                                - cell [ref=f2e277]:
                                  - link "Draft Diversified Energy Inc" [ref=f2e278]:
                                    - /url: ../#/accounts/record/02eb98c5-37f4-4697-9eb5-c89ab880b93f?offset=1&stamp=1790829803093509800
                                - cell "2027-02-22 15:15" [ref=f2e279]
                                - cell "Accepted" [ref=f2e280]
                                - cell [ref=f2e281]:
                                  - link "" [ref=f2e282]:
                                    - /url: ../#/meetings/edit/0716b2d4-c355-426f-8b2c-8e5c58152d20?offset=1&stamp=1790829803093509800&return_module=Home&return_action=index
                                  - link "" [ref=f2e284]:
                                    - /url: ../#/meetings/record/0716b2d4-c355-426f-8b2c-8e5c58152d20?offset=1&stamp=1790829803093509800&return_module=Home&return_action=index
                              - row [ref=f2e286]:
                                - cell "" [ref=f2e287]:
                                  - generic "Close" [ref=f2e289]: 
                                - cell [ref=f2e291]:
                                  - link "Initial discussion" [ref=f2e293]:
                                    - /url: ../#/meetings/record/e21d7428-046b-4da6-ab1b-f13f4f3d63e8?offset=2&stamp=1790829803093509800
                                - cell [ref=f2e294]:
                                  - link "Sandeon Consolidation Corp" [ref=f2e295]:
                                    - /url: ../#/accounts/record/fcd8e7fe-d1e6-4430-af52-2c60fcb94b10?offset=2&stamp=1790829803093509800
                                - cell "2027-06-22 10:15" [ref=f2e296]
                                - cell "Accepted" [ref=f2e297]
                                - cell [ref=f2e298]:
                                  - link "" [ref=f2e299]:
                                    - /url: ../#/meetings/edit/e21d7428-046b-4da6-ab1b-f13f4f3d63e8?offset=2&stamp=1790829803093509800&return_module=Home&return_action=index
                                  - link "" [ref=f2e301]:
                                    - /url: ../#/meetings/record/e21d7428-046b-4da6-ab1b-f13f4f3d63e8?offset=2&stamp=1790829803093509800&return_module=Home&return_action=index
                              - row [ref=f2e303]:
                                - cell "" [ref=f2e304]:
                                  - generic "Close" [ref=f2e306]: 
                                - cell [ref=f2e308]:
                                  - link "Demo" [ref=f2e310]:
                                    - /url: ../#/meetings/record/5101f0c7-514b-4024-af87-fadd70f5474d?offset=3&stamp=1790829803093509800
                                - cell [ref=f2e311]:
                                  - link "Dirt Mining Ltd" [ref=f2e312]:
                                    - /url: ../#/accounts/record/b6d7a81d-fa8c-43cf-8d2b-4c01e3b9e238?offset=3&stamp=1790829803093509800
                                - cell "2026-11-13 06:15" [ref=f2e313]
                                - cell "Accepted" [ref=f2e314]
                                - cell [ref=f2e315]:
                                  - link "" [ref=f2e316]:
                                    - /url: ../#/meetings/edit/5101f0c7-514b-4024-af87-fadd70f5474d?offset=3&stamp=1790829803093509800&return_module=Home&return_action=index
                                  - link "" [ref=f2e318]:
                                    - /url: ../#/meetings/record/5101f0c7-514b-4024-af87-fadd70f5474d?offset=3&stamp=1790829803093509800&return_module=Home&return_action=index
                              - row [ref=f2e320]:
                                - cell "" [ref=f2e321]:
                                  - generic "Close" [ref=f2e323]: 
                                - cell [ref=f2e325]:
                                  - link "Follow-up on proposal" [ref=f2e327]:
                                    - /url: ../#/meetings/record/cfd69c97-eb6a-42b5-9273-ad57f8ad37b8?offset=4&stamp=1790829803093509800
                                - cell [ref=f2e328]:
                                  - link "Draft Diversified Energy Inc" [ref=f2e329]:
                                    - /url: ../#/accounts/record/02eb98c5-37f4-4697-9eb5-c89ab880b93f?offset=4&stamp=1790829803093509800
                                - cell "2027-01-21 18:30" [ref=f2e330]
                                - cell "Accepted" [ref=f2e331]
                                - cell [ref=f2e332]:
                                  - link "" [ref=f2e333]:
                                    - /url: ../#/meetings/edit/cfd69c97-eb6a-42b5-9273-ad57f8ad37b8?offset=4&stamp=1790829803093509800&return_module=Home&return_action=index
                                  - link "" [ref=f2e335]:
                                    - /url: ../#/meetings/record/cfd69c97-eb6a-42b5-9273-ad57f8ad37b8?offset=4&stamp=1790829803093509800&return_module=Home&return_action=index
                              - row [ref=f2e337]:
                                - cell "" [ref=f2e338]:
                                  - generic "Close" [ref=f2e340]: 
                                - cell [ref=f2e342]:
                                  - link "Follow-up on proposal" [ref=f2e344]:
                                    - /url: ../#/meetings/record/4f8cc296-eda8-4356-9fe8-b03ab5203208?offset=5&stamp=1790829803093509800
                                - cell [ref=f2e345]:
                                  - link "Dirt Mining Ltd" [ref=f2e346]:
                                    - /url: ../#/accounts/record/b6d7a81d-fa8c-43cf-8d2b-4c01e3b9e238?offset=5&stamp=1790829803093509800
                                - cell "2026-10-23 07:30" [ref=f2e347]
                                - cell "Accepted" [ref=f2e348]
                                - cell [ref=f2e349]:
                                  - link "" [ref=f2e350]:
                                    - /url: ../#/meetings/edit/4f8cc296-eda8-4356-9fe8-b03ab5203208?offset=5&stamp=1790829803093509800&return_module=Home&return_action=index
                                  - link "" [ref=f2e352]:
                                    - /url: ../#/meetings/record/4f8cc296-eda8-4356-9fe8-b03ab5203208?offset=5&stamp=1790829803093509800&return_module=Home&return_action=index
                              - row [ref=f2e354]:
                                - cell [ref=f2e355]:
                                  - table [ref=f2e356]:
                                    - rowgroup [ref=f2e357]:
                                      - row [ref=f2e358]:
                                        - cell [ref=f2e359]
                                        - cell "(1 - 5 of 8)" [ref=f2e360]:
                                          - button "Start" [disabled] [ref=f2e361] [cursor=pointer]
                                          - button "Previous" [disabled] [ref=f2e368] [cursor=pointer]
                                          - button "Next" [ref=f2e376] [cursor=pointer]
                                          - button "End" [ref=f2e383] [cursor=pointer]
                      - listitem [ref=f2e390]:
                        - generic [ref=f2e391]:
                          - table [ref=f2e394]:
                            - rowgroup [ref=f2e395]:
                              - row [ref=f2e396]:
                                - cell " My Top Open Opportunities" [ref=f2e397]:
                                  - generic [ref=f2e398]:
                                    - generic [ref=f2e399]: 
                                    - generic [ref=f2e400]: My Top Open Opportunities
                                - cell [ref=f2e401]:
                                  - generic [ref=f2e402]:
                                    - link "Refresh SuiteCRM Dashlet" [ref=f2e403]:
                                      - /url: javascript:void(0)
                                    - link "Edit SuiteCRM Dashlet" [ref=f2e404]:
                                      - /url: javascript:void(0)
                                    - link "Delete SuiteCRM Dashlet" [ref=f2e410]:
                                      - /url: javascript:void(0)
                          - table [ref=f2e417]:
                            - rowgroup [ref=f2e418]:
                              - row [ref=f2e419]:
                                - columnheader [ref=f2e420]:
                                  - generic [ref=f2e421]:
                                    - link "Opportunity Name" [ref=f2e422]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e423]:
                                      - img [ref=f2e424]: Created with Sketch.
                                - columnheader [ref=f2e429]:
                                  - generic [ref=f2e430]:
                                    - link "Account Name" [ref=f2e431]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e432]:
                                      - img [ref=f2e433]: Created with Sketch.
                                - columnheader [ref=f2e438]:
                                  - generic [ref=f2e439]:
                                    - link "Amount" [ref=f2e440]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e441]:
                                      - img [ref=f2e442]: Created with Sketch.
                                - columnheader [ref=f2e447]:
                                  - generic [ref=f2e448]:
                                    - link "Expected Close Date" [ref=f2e449]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e450]:
                                      - img [ref=f2e451]: Created with Sketch.
                                - cell [ref=f2e456]
                            - rowgroup [ref=f2e457]:
                              - row [ref=f2e458]:
                                - cell [ref=f2e459]:
                                  - link "Draft Diversified Energy Inc - 7500 units" [ref=f2e461]:
                                    - /url: ../#/opportunities/record/d3c01a82-e99b-44d0-bce9-ea19030b386f?offset=1&stamp=1790829803095556300
                                - cell "Draft Diversified Energy Inc" [ref=f2e462]
                                - cell "$75,000.00" [ref=f2e463]
                                - cell "2027-01-26" [ref=f2e464]
                                - cell [ref=f2e465]:
                                  - link "" [ref=f2e466]:
                                    - /url: ../#/opportunities/edit/d3c01a82-e99b-44d0-bce9-ea19030b386f?offset=1&stamp=1790829803095556300&return_module=Home&return_action=index
                                  - link "" [ref=f2e468]:
                                    - /url: ../#/opportunities/record/d3c01a82-e99b-44d0-bce9-ea19030b386f?offset=1&stamp=1790829803095556300&return_module=Home&return_action=index
                              - row [ref=f2e470]:
                                - cell [ref=f2e471]:
                                  - link "Sandeon Consolidation Corp - 10000 units" [ref=f2e473]:
                                    - /url: ../#/opportunities/record/48250a9e-51be-409a-bf3e-49174f93c550?offset=2&stamp=1790829803095556300
                                - cell "Sandeon Consolidation Corp" [ref=f2e474]
                                - cell "$100,000.00" [ref=f2e475]
                                - cell "2027-08-21" [ref=f2e476]
                                - cell [ref=f2e477]:
                                  - link "" [ref=f2e478]:
                                    - /url: ../#/opportunities/edit/48250a9e-51be-409a-bf3e-49174f93c550?offset=2&stamp=1790829803095556300&return_module=Home&return_action=index
                                  - link "" [ref=f2e480]:
                                    - /url: ../#/opportunities/record/48250a9e-51be-409a-bf3e-49174f93c550?offset=2&stamp=1790829803095556300&return_module=Home&return_action=index
                              - row [ref=f2e482]:
                                - cell [ref=f2e483]:
                                  - link "Airline Maintenance Co - 5000 units" [ref=f2e485]:
                                    - /url: ../#/opportunities/record/7f08ddf5-dc68-4326-8569-9c1d04dafad8?offset=3&stamp=1790829803095556300
                                - cell "Airline Maintenance Co" [ref=f2e486]
                                - cell "$50,000.00" [ref=f2e487]
                                - cell "2027-07-27" [ref=f2e488]
                                - cell [ref=f2e489]:
                                  - link "" [ref=f2e490]:
                                    - /url: ../#/opportunities/edit/7f08ddf5-dc68-4326-8569-9c1d04dafad8?offset=3&stamp=1790829803095556300&return_module=Home&return_action=index
                                  - link "" [ref=f2e492]:
                                    - /url: ../#/opportunities/record/7f08ddf5-dc68-4326-8569-9c1d04dafad8?offset=3&stamp=1790829803095556300&return_module=Home&return_action=index
                              - row [ref=f2e494]:
                                - cell [ref=f2e495]:
                                  - link "Dirt Mining Ltd - 500 units" [ref=f2e497]:
                                    - /url: ../#/opportunities/record/79c107d1-782a-483d-8ccd-67484ff72108?offset=4&stamp=1790829803095556300
                                - cell "Dirt Mining Ltd" [ref=f2e498]
                                - cell "$5,000.00" [ref=f2e499]
                                - cell "2027-06-03" [ref=f2e500]
                                - cell [ref=f2e501]:
                                  - link "" [ref=f2e502]:
                                    - /url: ../#/opportunities/edit/79c107d1-782a-483d-8ccd-67484ff72108?offset=4&stamp=1790829803095556300&return_module=Home&return_action=index
                                  - link "" [ref=f2e504]:
                                    - /url: ../#/opportunities/record/79c107d1-782a-483d-8ccd-67484ff72108?offset=4&stamp=1790829803095556300&return_module=Home&return_action=index
                              - row [ref=f2e506]:
                                - cell [ref=f2e507]:
                                  - link "A.G. Parr PLC - 10000 units" [ref=f2e509]:
                                    - /url: ../#/opportunities/record/5c17e4a9-08fb-40f1-9a49-51c82276189f?offset=5&stamp=1790829803095556300
                                - cell "A.G. Parr PLC" [ref=f2e510]
                                - cell "$100,000.00" [ref=f2e511]
                                - cell "2026-12-05" [ref=f2e512]
                                - cell [ref=f2e513]:
                                  - link "" [ref=f2e514]:
                                    - /url: ../#/opportunities/edit/5c17e4a9-08fb-40f1-9a49-51c82276189f?offset=5&stamp=1790829803095556300&return_module=Home&return_action=index
                                  - link "" [ref=f2e516]:
                                    - /url: ../#/opportunities/record/5c17e4a9-08fb-40f1-9a49-51c82276189f?offset=5&stamp=1790829803095556300&return_module=Home&return_action=index
                              - row [ref=f2e518]:
                                - cell [ref=f2e519]:
                                  - table [ref=f2e520]:
                                    - rowgroup [ref=f2e521]:
                                      - row [ref=f2e522]:
                                        - cell [ref=f2e523]
                                        - cell "(1 - 5 of 10)" [ref=f2e524]:
                                          - button "Start" [disabled] [ref=f2e525] [cursor=pointer]
                                          - button "Previous" [disabled] [ref=f2e532] [cursor=pointer]
                                          - button "Next" [ref=f2e540] [cursor=pointer]
                                          - button "End" [ref=f2e547] [cursor=pointer]
                      - listitem [ref=f2e554]:
                        - generic [ref=f2e555]:
                          - table [ref=f2e558]:
                            - rowgroup [ref=f2e559]:
                              - row [ref=f2e560]:
                                - cell " My Accounts" [ref=f2e561]:
                                  - generic [ref=f2e562]:
                                    - generic [ref=f2e563]: 
                                    - generic [ref=f2e564]: My Accounts
                                - cell [ref=f2e565]:
                                  - generic [ref=f2e566]:
                                    - link "Refresh SuiteCRM Dashlet" [ref=f2e567]:
                                      - /url: javascript:void(0)
                                    - link "Edit SuiteCRM Dashlet" [ref=f2e568]:
                                      - /url: javascript:void(0)
                                    - link "Delete SuiteCRM Dashlet" [ref=f2e574]:
                                      - /url: javascript:void(0)
                          - table [ref=f2e581]:
                            - rowgroup [ref=f2e582]:
                              - row [ref=f2e583]:
                                - columnheader [ref=f2e584]:
                                  - generic [ref=f2e585]:
                                    - link "Name" [ref=f2e586]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e587]:
                                      - img [ref=f2e588]: Created with Sketch.
                                - columnheader [ref=f2e593]:
                                  - generic [ref=f2e594]:
                                    - link "Type" [ref=f2e595]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e596]:
                                      - img [ref=f2e597]: Created with Sketch.
                                - columnheader [ref=f2e602]:
                                  - generic [ref=f2e603]:
                                    - link "Website" [ref=f2e604]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e605]:
                                      - img [ref=f2e606]: Created with Sketch.
                                - columnheader [ref=f2e611]:
                                  - generic [ref=f2e612]:
                                    - link "Phone" [ref=f2e613]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e614]:
                                      - img [ref=f2e615]: Created with Sketch.
                                - columnheader [ref=f2e620]:
                                  - generic [ref=f2e621]:
                                    - link "Billing Country" [ref=f2e622]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e623]:
                                      - img [ref=f2e624]: Created with Sketch.
                                - cell [ref=f2e629]
                            - rowgroup [ref=f2e630]:
                              - row [ref=f2e631]:
                                - cell [ref=f2e632]:
                                  - link "A.G. Parr PLC" [ref=f2e634]:
                                    - /url: ../#/accounts/record/e4b45584-8c87-4726-929f-973b29544803?offset=1&stamp=1790829804001867100
                                - cell "Reseller" [ref=f2e635]
                                - cell [ref=f2e636]:
                                  - link "www.sugarim.name" [ref=f2e637]:
                                    - /url: http://www.sugarim.name
                                - cell [ref=f2e638]:
                                  - link "(696) 905-7007" [ref=f2e639]:
                                    - /url: tel:(696) 905-7007
                                - cell "USA" [ref=f2e640]
                                - cell [ref=f2e641]:
                                  - link "" [ref=f2e642]:
                                    - /url: ../#/accounts/edit/e4b45584-8c87-4726-929f-973b29544803?offset=1&stamp=1790829804001867100&return_module=Home&return_action=index
                                  - link "" [ref=f2e644]:
                                    - /url: ../#/accounts/record/e4b45584-8c87-4726-929f-973b29544803?offset=1&stamp=1790829804001867100&return_module=Home&return_action=index
                              - row [ref=f2e646]:
                                - cell [ref=f2e647]:
                                  - link "Sandeon Consolidation Corp" [ref=f2e649]:
                                    - /url: ../#/accounts/record/fcd8e7fe-d1e6-4430-af52-2c60fcb94b10?offset=2&stamp=1790829804001867100
                                - cell "Competitor" [ref=f2e650]
                                - cell [ref=f2e651]:
                                  - link "www.kidbeans.net" [ref=f2e652]:
                                    - /url: http://www.kidbeans.net
                                - cell [ref=f2e653]:
                                  - link "(460) 072-3232" [ref=f2e654]:
                                    - /url: tel:(460) 072-3232
                                - cell "USA" [ref=f2e655]
                                - cell [ref=f2e656]:
                                  - link "" [ref=f2e657]:
                                    - /url: ../#/accounts/edit/fcd8e7fe-d1e6-4430-af52-2c60fcb94b10?offset=2&stamp=1790829804001867100&return_module=Home&return_action=index
                                  - link "" [ref=f2e659]:
                                    - /url: ../#/accounts/record/fcd8e7fe-d1e6-4430-af52-2c60fcb94b10?offset=2&stamp=1790829804001867100&return_module=Home&return_action=index
                              - row [ref=f2e661]:
                                - cell [ref=f2e662]:
                                  - link "Draft Diversified Energy Inc" [ref=f2e664]:
                                    - /url: ../#/accounts/record/02eb98c5-37f4-4697-9eb5-c89ab880b93f?offset=3&stamp=1790829804001867100
                                - cell "Investor" [ref=f2e665]
                                - cell [ref=f2e666]:
                                  - link "www.hrkid.it" [ref=f2e667]:
                                    - /url: http://www.hrkid.it
                                - cell [ref=f2e668]:
                                  - link "(347) 674-9293" [ref=f2e669]:
                                    - /url: tel:(347) 674-9293
                                - cell "USA" [ref=f2e670]
                                - cell [ref=f2e671]:
                                  - link "" [ref=f2e672]:
                                    - /url: ../#/accounts/edit/02eb98c5-37f4-4697-9eb5-c89ab880b93f?offset=3&stamp=1790829804001867100&return_module=Home&return_action=index
                                  - link "" [ref=f2e674]:
                                    - /url: ../#/accounts/record/02eb98c5-37f4-4697-9eb5-c89ab880b93f?offset=3&stamp=1790829804001867100&return_module=Home&return_action=index
                              - row [ref=f2e676]:
                                - cell [ref=f2e677]:
                                  - link "Dirt Mining Ltd" [ref=f2e679]:
                                    - /url: ../#/accounts/record/b6d7a81d-fa8c-43cf-8d2b-4c01e3b9e238?offset=4&stamp=1790829804001867100
                                - cell "Prospect" [ref=f2e680]
                                - cell [ref=f2e681]:
                                  - link "www.beanssupport.name" [ref=f2e682]:
                                    - /url: http://www.beanssupport.name
                                - cell [ref=f2e683]:
                                  - link "(387) 155-6429" [ref=f2e684]:
                                    - /url: tel:(387) 155-6429
                                - cell "USA" [ref=f2e685]
                                - cell [ref=f2e686]:
                                  - link "" [ref=f2e687]:
                                    - /url: ../#/accounts/edit/b6d7a81d-fa8c-43cf-8d2b-4c01e3b9e238?offset=4&stamp=1790829804001867100&return_module=Home&return_action=index
                                  - link "" [ref=f2e689]:
                                    - /url: ../#/accounts/record/b6d7a81d-fa8c-43cf-8d2b-4c01e3b9e238?offset=4&stamp=1790829804001867100&return_module=Home&return_action=index
                              - row [ref=f2e691]:
                                - cell [ref=f2e692]:
                                  - link "Constrata Trust LLC" [ref=f2e694]:
                                    - /url: ../#/accounts/record/33a3da17-29b6-4976-8824-76b38bdb43c2?offset=5&stamp=1790829804001867100
                                - cell "Investor" [ref=f2e695]
                                - cell [ref=f2e696]:
                                  - link "www.imbeans.com" [ref=f2e697]:
                                    - /url: http://www.imbeans.com
                                - cell [ref=f2e698]:
                                  - link "(997) 752-5948" [ref=f2e699]:
                                    - /url: tel:(997) 752-5948
                                - cell "USA" [ref=f2e700]
                                - cell [ref=f2e701]:
                                  - link "" [ref=f2e702]:
                                    - /url: ../#/accounts/edit/33a3da17-29b6-4976-8824-76b38bdb43c2?offset=5&stamp=1790829804001867100&return_module=Home&return_action=index
                                  - link "" [ref=f2e704]:
                                    - /url: ../#/accounts/record/33a3da17-29b6-4976-8824-76b38bdb43c2?offset=5&stamp=1790829804001867100&return_module=Home&return_action=index
                              - row [ref=f2e706]:
                                - cell [ref=f2e707]:
                                  - table [ref=f2e708]:
                                    - rowgroup [ref=f2e709]:
                                      - row [ref=f2e710]:
                                        - cell [ref=f2e711]
                                        - cell "(1 - 5 of 7)" [ref=f2e712]:
                                          - button "Start" [disabled] [ref=f2e713] [cursor=pointer]
                                          - button "Previous" [disabled] [ref=f2e720] [cursor=pointer]
                                          - button "Next" [ref=f2e728] [cursor=pointer]
                                          - button "End" [ref=f2e735] [cursor=pointer]
                      - listitem [ref=f2e742]:
                        - generic [ref=f2e743]:
                          - table [ref=f2e746]:
                            - rowgroup [ref=f2e747]:
                              - row [ref=f2e748]:
                                - cell " My Leads" [ref=f2e749]:
                                  - generic [ref=f2e750]:
                                    - generic [ref=f2e751]: 
                                    - generic [ref=f2e752]: My Leads
                                - cell [ref=f2e753]:
                                  - generic [ref=f2e754]:
                                    - link "Refresh SuiteCRM Dashlet" [ref=f2e755]:
                                      - /url: javascript:void(0)
                                    - link "Edit SuiteCRM Dashlet" [ref=f2e756]:
                                      - /url: javascript:void(0)
                                    - link "Delete SuiteCRM Dashlet" [ref=f2e762]:
                                      - /url: javascript:void(0)
                          - table [ref=f2e769]:
                            - rowgroup [ref=f2e770]:
                              - row [ref=f2e771]:
                                - columnheader [ref=f2e772]:
                                  - generic [ref=f2e773]:
                                    - link "Name" [ref=f2e774]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e775]:
                                      - img [ref=f2e776]: Created with Sketch.
                                - columnheader [ref=f2e781]:
                                  - generic [ref=f2e782]:
                                    - link "Job Title" [ref=f2e783]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e784]:
                                      - img [ref=f2e785]: Created with Sketch.
                                - columnheader [ref=f2e790]:
                                  - generic [ref=f2e791]:
                                    - link "Office Phone" [ref=f2e792]:
                                      - /url: "#"
                                    - generic "Sort" [ref=f2e793]:
                                      - img [ref=f2e794]: Created with Sketch.
                                - columnheader "Email Address" [ref=f2e799]
                                - cell [ref=f2e801]
                            - rowgroup [ref=f2e802]:
                              - row [ref=f2e803]:
                                - cell [ref=f2e804]:
                                  - link "Barbra Fragoso" [ref=f2e806]:
                                    - /url: ../#/leads/record/43aba6cb-92cf-4ef8-b207-9333ab2e0594?offset=1&stamp=1790829804004745500
                                - cell "IT Developer" [ref=f2e807]
                                - cell [ref=f2e808]:
                                  - link "(727) 149-9633" [ref=f2e809]:
                                    - /url: tel:(727) 149-9633
                                - cell [ref=f2e810]:
                                  - link "vegan.vegan@example.tw" [ref=f2e811]:
                                    - /url: mailto:vegan.vegan@example.tw
                                - cell [ref=f2e812]:
                                  - link "" [ref=f2e813]:
                                    - /url: ../#/leads/edit/43aba6cb-92cf-4ef8-b207-9333ab2e0594?offset=1&stamp=1790829804004745500&return_module=Home&return_action=index
                                  - link "" [ref=f2e815]:
                                    - /url: ../#/leads/record/43aba6cb-92cf-4ef8-b207-9333ab2e0594?offset=1&stamp=1790829804004745500&return_module=Home&return_action=index
                              - row [ref=f2e817]:
                                - cell [ref=f2e818]:
                                  - link "Tim Maness" [ref=f2e820]:
                                    - /url: ../#/leads/record/ad54a6c4-460e-43ad-9f77-fedad135505d?offset=2&stamp=1790829804004745500
                                - cell "President" [ref=f2e821]
                                - cell [ref=f2e822]:
                                  - link "(235) 008-4297" [ref=f2e823]:
                                    - /url: tel:(235) 008-4297
                                - cell [ref=f2e824]:
                                  - link "im.support.support@example.net" [ref=f2e825]:
                                    - /url: mailto:im.support.support@example.net
                                - cell [ref=f2e826]:
                                  - link "" [ref=f2e827]:
                                    - /url: ../#/leads/edit/ad54a6c4-460e-43ad-9f77-fedad135505d?offset=2&stamp=1790829804004745500&return_module=Home&return_action=index
                                  - link "" [ref=f2e829]:
                                    - /url: ../#/leads/record/ad54a6c4-460e-43ad-9f77-fedad135505d?offset=2&stamp=1790829804004745500&return_module=Home&return_action=index
                              - row [ref=f2e831]:
                                - cell [ref=f2e832]:
                                  - link "Stella Vallery" [ref=f2e834]:
                                    - /url: ../#/leads/record/c292fa66-e243-4cb3-9404-388e55baf1bc?offset=3&stamp=1790829804004745500
                                - cell "Director Sales" [ref=f2e835]
                                - cell [ref=f2e836]:
                                  - link "(426) 654-8261" [ref=f2e837]:
                                    - /url: tel:(426) 654-8261
                                - cell [ref=f2e838]:
                                  - link "phone83@example.edu" [ref=f2e839]:
                                    - /url: mailto:phone83@example.edu
                                - cell [ref=f2e840]:
                                  - link "" [ref=f2e841]:
                                    - /url: ../#/leads/edit/c292fa66-e243-4cb3-9404-388e55baf1bc?offset=3&stamp=1790829804004745500&return_module=Home&return_action=index
                                  - link "" [ref=f2e843]:
                                    - /url: ../#/leads/record/c292fa66-e243-4cb3-9404-388e55baf1bc?offset=3&stamp=1790829804004745500&return_module=Home&return_action=index
                              - row [ref=f2e845]:
                                - cell [ref=f2e846]:
                                  - link "Jess Skidmore" [ref=f2e848]:
                                    - /url: ../#/leads/record/bf7575c9-cd27-4533-80fb-023cb5ce0df2?offset=4&stamp=1790829804004745500
                                - cell "President" [ref=f2e849]
                                - cell [ref=f2e850]:
                                  - link "(509) 910-7035" [ref=f2e851]:
                                    - /url: tel:(509) 910-7035
                                - cell [ref=f2e852]:
                                  - link "hr.section@example.co.uk" [ref=f2e853]:
                                    - /url: mailto:hr.section@example.co.uk
                                - cell [ref=f2e854]:
                                  - link "" [ref=f2e855]:
                                    - /url: ../#/leads/edit/bf7575c9-cd27-4533-80fb-023cb5ce0df2?offset=4&stamp=1790829804004745500&return_module=Home&return_action=index
                                  - link "" [ref=f2e857]:
                                    - /url: ../#/leads/record/bf7575c9-cd27-4533-80fb-023cb5ce0df2?offset=4&stamp=1790829804004745500&return_module=Home&return_action=index
                              - row [ref=f2e859]:
                                - cell [ref=f2e860]:
                                  - link "Brendon Anderson" [ref=f2e862]:
                                    - /url: ../#/leads/record/41fc3b2f-2e8e-4bea-9c93-c1ef9c6c24d6?offset=5&stamp=1790829804004745500
                                - cell "VP Operations" [ref=f2e863]
                                - cell [ref=f2e864]:
                                  - link "(769) 256-1178" [ref=f2e865]:
                                    - /url: tel:(769) 256-1178
                                - cell [ref=f2e866]:
                                  - link "the.support@example.edu" [ref=f2e867]:
                                    - /url: mailto:the.support@example.edu
                                - cell [ref=f2e868]:
                                  - link "" [ref=f2e869]:
                                    - /url: ../#/leads/edit/41fc3b2f-2e8e-4bea-9c93-c1ef9c6c24d6?offset=5&stamp=1790829804004745500&return_module=Home&return_action=index
                                  - link "" [ref=f2e871]:
                                    - /url: ../#/leads/record/41fc3b2f-2e8e-4bea-9c93-c1ef9c6c24d6?offset=5&stamp=1790829804004745500&return_module=Home&return_action=index
                              - row [ref=f2e873]:
                                - cell [ref=f2e874]:
                                  - table [ref=f2e875]:
                                    - rowgroup [ref=f2e876]:
                                      - row [ref=f2e877]:
                                        - cell [ref=f2e878]
                                        - cell "(1 - 5 of 33)" [ref=f2e879]:
                                          - button "Start" [disabled] [ref=f2e880] [cursor=pointer]
                                          - button "Previous" [disabled] [ref=f2e887] [cursor=pointer]
                                          - button "Next" [ref=f2e895] [cursor=pointer]
                                          - button "End" [ref=f2e902] [cursor=pointer]
                      - listitem [ref=f2e909]
                  - cell [ref=f2e910]:
                    - list [ref=f2e911]:
                      - listitem [ref=f2e912]
                      - listitem [ref=f2e913]:
                        - generic [ref=f2e914]:
                          - table [ref=f2e917]:
                            - rowgroup [ref=f2e918]:
                              - row [ref=f2e919]:
                                - cell " My Activity Stream" [ref=f2e920]:
                                  - generic [ref=f2e921]:
                                    - generic [ref=f2e922]: 
                                    - generic [ref=f2e923]: My Activity Stream
                                - cell [ref=f2e924]:
                                  - generic [ref=f2e925]:
                                    - link "Refresh SuiteCRM Dashlet" [ref=f2e926]:
                                      - /url: javascript:void(0)
                                    - link "Edit SuiteCRM Dashlet" [ref=f2e927]:
                                      - /url: javascript:void(0)
                                    - link "Delete SuiteCRM Dashlet" [ref=f2e933]:
                                      - /url: javascript:void(0)
                          - generic [ref=f2e939]:
                            - table [ref=f2e942]:
                              - rowgroup [ref=f2e943]:
                                - row [ref=f2e944]:
                                  - cell "Will Westin" [ref=f2e945]
                                  - cell [ref=f2e947]:
                                    - textbox "Post Status Update for Will Westin" [ref=f2e948]
                                  - cell [ref=f2e949]:
                                    - button "Post" [ref=f2e950] [cursor=pointer]
                                  - cell
                            - table [ref=f2e953]:
                              - rowgroup [ref=f2e954]:
                                - row [ref=f2e955]:
                                  - columnheader [ref=f2e956]
                              - rowgroup [ref=f2e957]:
                                - row [ref=f2e958]:
                                  - cell [ref=f2e959]:
                                    - emphasis [ref=f2e960]: No Data
                                - row [ref=f2e961]:
                                  - cell [ref=f2e962]:
                                    - table [ref=f2e963]:
                                      - rowgroup [ref=f2e964]:
                                        - row [ref=f2e965]:
                                          - cell [ref=f2e966]
                                          - cell "(0 - 0 of 0)" [ref=f2e967]:
                                            - button "Start" [disabled] [ref=f2e968] [cursor=pointer]
                                            - button "Previous" [disabled] [ref=f2e975] [cursor=pointer]
                                            - button "Next" [disabled] [ref=f2e983] [cursor=pointer]
                                            - button "End" [disabled] [ref=f2e990] [cursor=pointer]
                      - listitem [ref=f2e997]
          - text: 
  - generic [ref=e100]:
    - generic [ref=e101]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e102]: Back To Top
```

# Test source

```ts
  1   | export class DocumentPage {
  2   |     constructor(page) {
  3   |         this.page = page;
  4   |         this.DocumentMenu = page.locator('a').filter({ hasText: /^Documents$/ })
  5   |         this.createDocument = page.getByRole('link', { name: 'Create Document' });
  6   |         this.File = page.getByText('FILE', { exact: true });
  7   |         //this.fileUploadInput = page.getByText('Upload Click or drag a file');
  8   |         this.fileUploadInput = page.locator('input[type="file"]');
  9   |         this.documentName = page.getByRole('textbox').nth(1);
  10  |         this.revision = page.getByRole('textbox').nth(2);
  11  |         this.documentType = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Mail Merge EULA NDA License' }).getByRole('combobox');
  12  |         this.template = page.locator('.checkmark');
  13  |         this.publishDate = page.getByRole('textbox', { name: 'yyyy-mm-dd' }).first();
  14  |         this.expirationDate = page.getByRole('textbox', { name: 'yyyy-mm-dd' }).nth(1);
  15  |         this.category = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Marketing Knowledge Base Sales' }).getByRole('combobox');
  16  |         this.subcategory = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Marketing Collateral Product' }).getByRole('combobox');
  17  |         this.assignedto = page.getByRole('combobox', { name: 'WillWestin' });
  18  |         this.savebutton = page.getByRole('button', { name: 'Save' });
  19  |         this.cancelbutton = page.getByRole('button', { name: 'Cancel' });
  20  |         this.other = page.getByRole('tab', { name: 'OTHER' });
  21  |         this.datecreated = page.getByText('DATE CREATED');
  22  |         this.datemodified = page.getByText('DATE MODIFIED');
  23  |         this.saveButton = page.getByRole('button', { name: 'Save' });
  24  |         this.cancelButton = page.getByRole('button', { name: 'Cancel' });
  25  |         this.viewDocuments = page.getByRole('link', { name: 'View Documents' });
  26  |         this.checkbox = page.locator('scrm-table-header').getByLabel('Select Action Menu');
  27  |         this.bulkActions = page.locator('scrm-table-header').getByLabel('Bulk Actions');
  28  |         this.file = page.getByText('File', { exact: true });
  29  |         this.category = page.getByText('Category', { exact: true });
  30  |         this.subcategory = page.getByRole('columnheader', { name: 'Sub Category' });
  31  |         this.revisiondate = page.getByText('Revision Date');
  32  |         this.expirationdate = page.getByRole('columnheader', { name: 'Expiration Date' });
  33  |         this.user = page.getByText('User');
  34  |         this.previouspage = page.locator('scrm-table-header').getByRole('button', { name: 'Previous page' });
  35  |         this.firstpage = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to first page' });
  36  |         this.nextpage = page.locator('scrm-table-header').getByRole('button', { name: 'Next page' });
  37  |         this.lastpage = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to last page' });
  38  |         this.column = page.locator('scrm-table-header').getByRole('button', { name: 'Columns' });
  39  |         this.choosecolumns = page.locator('div').filter({ hasText: 'Choose Columns' }).nth(4);
  40  |         this.displayed = page.getByText('DISPLAYED');
  41  |         this.documentsname = page.locator('#cdk-drop-list-2').getByText('Document Name');
  42  |         this.file = page.locator('#cdk-drop-list-2').getByText('File');
  43  |         this.category = page.locator('#cdk-drop-list-2').getByText('Category', { exact: true })
  44  |         this.subcategory = page.locator('#cdk-drop-list-2').getByText('Sub Category');
  45  |         this.revisiondate = page.locator('#cdk-drop-list-2').getByText('Revision Date');
  46  |         this.expirationdate = page.locator('#cdk-drop-list-2').getByText('Expiration Date');
  47  |         this.user = page.locator('#cdk-drop-list-2').getByText('User');
  48  |         this.datecreated = page.getByText('Date Created');
  49  |         this.hidden = page.getByText('HIDDEN');
  50  |         this.modified = page.getByText('Modified by');
  51  |         this.closebutton = page.getByRole('button').filter({ hasText: '×' });
  52  |         this.filterbutton = page.getByRole('button', { name: 'Filter' });
  53  |         this.documentrevision = page.getByLabel('Revision');
  54  | 
  55  |     }
  56  | 
  57  |     async hoverOverDocumentMenu() {
> 58  |         await this.DocumentMenu.hover();
      |                                 ^ Error: locator.hover: Test timeout of 30000ms exceeded.
  59  |     }
  60  | 
  61  |    
  62  |     async clickCreateDocument() 
  63  |     { 
  64  |       await this.createDocument.waitFor({state: 'visible'});
  65  |         await this.createDocument.click();
  66  |      } 
  67  | 
  68  |      async uploadDocument(file) 
  69  |     { 
  70  |         await this.fileUploadInput.click();
  71  |         await this.page.setInputFiles('input[type="file"]', file);
  72  |      } 
  73  | 
  74  |     async enterDocumentName(name) 
  75  |     { 
  76  |         await this.documentName.fill(String(name));
  77  |      } 
  78  |     async enterRevision(revision) 
  79  |     { 
  80  |         await this.revision.fill(revision);
  81  |      } 
  82  |     async selectDocumentType(type)
  83  |      { 
  84  |         await this.documentType.click(); 
  85  |         await this.page.getByText(type, { exact: true }).click();
  86  |      } 
  87  |         async selectTemplate() 
  88  |         { 
  89  |             await this.template.first().click();
  90  |          } 
  91  |         async enterPublishDate(date) 
  92  |         {
  93  |              await this.publishDate.fill(date); 
  94  |             } 
  95  |         async enterExpirationDate(date) 
  96  |         { 
  97  |             await this.expirationDate.fill(date); 
  98  |         } 
  99  |         async selectCategory(category)
  100 |          { 
  101 |             await this.categoryDropdown.click(); 
  102 |             await this.page.getByText(category, { exact: true }).click();
  103 |          } 
  104 |             async selectSubcategory(subcategory) 
  105 |             { 
  106 |                 await this.subcategoryDropdown.click(); 
  107 |                 await this.page.getByText(subcategory, { exact: true }).click();
  108 |              } 
  109 |                 async saveDocument() 
  110 |                 { 
  111 |                     await this.saveButton.click();
  112 |                  } 
  113 |                 async cancelDocument() 
  114 |                 {
  115 |                      await this.cancelButton.click(); 
  116 | 
  117 |                 }
  118 |             
  119 | 
  120 |  async hoverColumns() {
  121 |      await this.columnsButton.hover();
  122 |      } 
  123 |      
  124 |      async hoverBulkActions() 
  125 |      {
  126 |          await this.bulkActions.hover(); 
  127 |         }
  128 |  async openColumnsMenu() { 
  129 |     await this.columnsButton.hover();
  130 |      await this.columnsButton.click();
  131 |      } 
  132 |      async chooseColumnsMenu() { 
  133 |         await this.columnsButton.hover(); 
  134 |         await this.chooseColumns.click(); 
  135 |     }   
  136 |     
  137 |     async openViewDocuments() {
  138 |          await this.viewDocuments.click(); 
  139 |         } 
  140 |         async clickFilter() { 
  141 |             await this.filterButton.click(); 
  142 |         } async closeWindow() 
  143 |         { 
  144 |             await this.closeButton.click();
  145 |          }
  146 | 
  147 |          async goToPreviousPage() { 
  148 |             await this.previousPage.click();
  149 |          } 
  150 |          async goToFirstPage() {
  151 |              await this.firstPage.click(); 
  152 |             } 
  153 |             async goToNextPage() {
  154 |                  await this.nextPage.click(); 
  155 |                 } 
  156 |     async goToLastPage()
  157 |      { await this.lastPage.click(); 
  158 | 
```