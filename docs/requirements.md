# Profile form requirements

| ID | Field or behavior | Requirement |
| --- | --- | --- |
| R1 | Display name | Required. 2 to 50 characters after removing spaces at the start and end. Letters from any language are allowed (for example José, Nguyễn, 李小龙), plus spaces, hyphens, periods and apostrophes. |
| R2 | Email | Required. Must look like name@domain.tld. |
| R3 | Age | Optional. If given, a whole number from 13 to 120. |
| R4 | Pronouns | Optional free text, up to 30 characters. Users write their pronouns in their own words; there is no fixed list. |
| R5 | Bio | Optional, up to 160 characters. Show a live character counter. |
| R6 | Errors | Show each error next to its field. Keep everything the user typed so they can fix it. |
| R7 | Preview | After a successful save, show a preview card with the name, pronouns and bio exactly as the user typed them, as plain text. |
