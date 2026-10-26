
"use strict";
const COURSES=[
{id:"defense",name:"Digital Defense",color:"#4d83f5",icon:"🛡️",subtitle:"Protect your devices and accounts",intro:"Your devices and online accounts hold important information, from personal messages to schoolwork and financial details. Keeping them secure starts with understanding how common security features work. In this module, you'll learn practical ways to protect your accounts, recognize risky software, and reduce your exposure to cyber threats.",lessons:["Password Security","Multifactor Authentication","Software Updates and Device Security","Safe Downloads and Application Permissions"],game:"Security Setup",gameIntro:"Configure a fictional student's device and account with safe security choices."},
{id:"scams",name:"Scam Sleuth",color:"#9066e9",icon:"🔎",subtitle:"Recognize deception and manipulation",intro:"Not everything you encounter online is what it seems. Scammers use convincing messages, fake websites, and psychological tricks to persuade people to share information or make unsafe decisions. Learn to identify suspicious activity, evaluate online claims, and recognize common manipulation tactics.",lessons:["Phishing and Fraudulent Messages","Suspicious Links and URLs","Website Authenticity and Online Fraud","Social Engineering and Impersonation"],game:"Inbox Investigator",gameIntro:"Investigate a series of fictional messages and choose how to respond."},
{id:"privacy",name:"Privacy Protocol",color:"#7d9ae5",icon:"◈",subtitle:"Take control of your digital footprint",intro:"Every time you browse, post, or interact online, you may leave information about yourself. Some information is shared intentionally, while other data may be collected in the background. Explore how digital footprints form, how platforms use personal information, and how to make informed choices about what you share.",lessons:["Personal Information and Data Protection","Digital Footprints and Online Reputation","Privacy Settings and Data Collection","Online Communication and Personal Boundaries"],game:"Profile Protector",gameIntro:"Help a fictional student make their online profile safer."},
{id:"threats",name:"Threat Response",color:"#36b9c7",icon:"⚙️",subtitle:"Respond when something goes wrong",intro:"Even with good security habits, cyber incidents can still happen. Devices may become infected with malware, accounts may be compromised, and information may be exposed. Learn to recognize warning signs, respond appropriately, and recover using trusted tools and support.",lessons:["Types of Malware and Cyber Threats","Recognizing Compromised Devices","Account Compromise and Recovery","Cybersecurity Incident Response"],game:"Incident Commander",gameIntro:"Respond to a simulated security incident, one decision at a time."},
{id:"ai",name:"AI Awareness",color:"#b8c5d8",icon:"✧",subtitle:"Evaluate and use AI responsibly",intro:"Artificial intelligence is changing how we learn, work, and communicate. From chatbots to image generators, AI tools are increasingly common, but their outputs can be inaccurate, biased, or misleading. Learn to evaluate AI content critically, understand its limits, and decide when and how to use it responsibly.",lessons:["Understanding Artificial Intelligence and Generative AI","AI-Generated Content and Deepfakes","AI Accuracy, Bias, and Misinformation","Ethical and Responsible AI Use"],game:"AI Detective",gameIntro:"Investigate AI claims and decide when to trust, verify, or avoid AI-generated information."}
];
// Each lesson is a short, self-contained scenario. The minigames combine three skills.
const Q={
defense:[
["A new account","What is the safest password practice?","You're creating a new account for a school club.",["Use the same memorable password as your email.","Use a unique long password or passphrase and save it in a trusted password manager.","Share the password with your whole club."],1,"Unique long passwords help prevent one breach from exposing multiple accounts."],
["Extra protection","What does multifactor authentication (MFA) add?","Your account offers a second sign-in step.",["An additional verification factor beyond the password.","A way to make your password publicly visible.","A guarantee that no one can ever access your account."],0,"MFA adds a second barrier. It greatly helps, but no security feature is perfect."],
["Update reminder","Why should you install security updates from trusted sources?","Your device says a security update is available.",["Updates only change the wallpaper.","Updates may fix vulnerabilities that attackers could exploit.","Updates always remove every virus."],1,"Security updates often fix known weaknesses and help protect your device."],
["Camera access","A flashlight app requests microphone, contacts, and camera permissions. What should you do?","The permissions don't appear necessary for a flashlight.",["Grant all permissions to make the app work.","Review or deny unnecessary permissions and consider a more trustworthy app.","Disable all security settings."],1,"Grant apps only the permissions they need. Unnecessary access can increase privacy and security risks."]
],
scams:[
["Urgent delivery text","What's the safest response?","An unexpected text says: 'Your parcel will be returned in 10 minutes. Pay at delivery-check.example.invalid now!'",["Pay immediately using the link.","Verify through the carrier's official website or app you open independently.","Reply with your card number."],1,"Urgency and unexpected payment links are warning signs. Verify independently."],
["Lookalike domain","What should you examine before trusting a link?","A link claims to be your bank but has a slightly misspelled domain name.",["The exact domain name and where the link actually leads.","Only the color of the webpage.","How many emojis are in the message."],0,"Lookalike domains can impersonate real organizations. Don't enter credentials on unverified sites."],
["Fake store","Which clue deserves investigation?","A new shop promises expensive electronics for 95% off and has no reliable contact information.",["An unusually low price combined with missing business information.","A website that uses product photographs.","A store that accepts normal payment methods."],0,"Unrealistic offers and unverifiable business details can signal fraud."],
["Friend's account","A friend suddenly asks you to send a login code. What should you do?","The request arrives in a chat, but it seems out of character.",["Send the code because you recognize the profile picture.","Verify with your friend through another trusted channel and never share sign-in codes.","Post the code publicly to ask for advice."],1,"Accounts can be compromised or impersonated. Verification codes are meant to stay private."]
],
privacy:[
["What counts as sensitive?","Which information is safest to keep private?","You're making a public gaming profile.",["Your favorite fictional character.","Your home address and school schedule.","A general interest in science."],1,"Detailed location and routine information can expose personal safety and privacy."],
["Old posts","Why can an old public post matter later?","You posted a joke years ago and forgot about it.",["Online content may be copied or shared even after you delete it.","All old posts automatically disappear after a month.","Only the original poster can ever view public content."],0,"Screenshots, archives, and resharing can make digital footprints persistent."],
["Location settings","What is a good first step to reduce unnecessary tracking?","A game asks to access your precise location all the time.",["Allow it without checking.","Review whether location is necessary and choose a more limited permission if possible.","Publish your location to your profile."],1,"Review permissions and share precise location only when there's a clear need."],
["New online contact","A stranger asks you to move a conversation to a private app and share personal details. What should you do?","You only know this person from a public game.",["Set boundaries, avoid sharing personal details, and seek trusted help if pressured.","Send your full address to build trust.","Assume anyone with a friendly username is safe."],0,"You can decline requests, keep personal information private, and ask a trusted adult for help."]
],
threats:[
["Malware basics","Which description of ransomware is most accurate?","A classmate asks what ransomware does.",["It typically encrypts or blocks access to data and demands payment.","It is always a harmless browser theme.","It only changes a computer's volume."],0,"Ransomware can deny access to files or systems. Backups and security practices reduce risk."],
["Strange device behavior","What's the best response to repeated unexpected security warnings?","Your laptop behaves unusually and shows unfamiliar programs.",["Ignore all changes forever.","Use trusted security tools and seek reliable technical support.","Install the first random 'fix' advertised in a pop-up."],1,"Unexpected changes merit investigation through trusted tools, not unknown downloads."],
["Compromised account","You notice unfamiliar sign-ins. What should you do first?","Your email account reports a sign-in you don't recognize.",["Secure the account through the provider's official site, change the password, and review active sessions.","Send your password to the sender of the alert.","Wait until someone else reports a problem."],0,"Use the official account recovery process, update credentials, and review account access."],
["Incident response","Which action helps contain a suspected compromised device?","A school device may be infected.",["Follow the school's reporting procedure and trusted IT guidance promptly.","Keep using it for sensitive tasks without telling anyone.","Share the suspicious file with friends."],0,"Prompt reporting and following approved guidance can limit harm and support recovery."]
],
ai:[
["What AI can do","Which statement about generative AI is most accurate?","You're explaining AI chatbots to a friend.",["They generate outputs based on learned patterns and can make mistakes.","They always verify facts before responding.","They can only repeat a single saved sentence."],0,"Generative AI can produce useful text and images but may be confidently wrong."],
["AI image detection","A strange-looking image is going viral. What is the best way to evaluate it?","Some people claim the image is AI-generated.",["Assume odd fingers prove it's AI.","Investigate the original source, context, and corroborating evidence.","Assume every realistic photo is authentic."],1,"Visual clues alone are unreliable. Provenance and independent verification matter more."],
["Confident but wrong","An AI assistant gives a precise historical date without a source. What should you do?","The answer sounds very convincing.",["Treat confidence as proof.","Check the claim against credible independent sources.","Share it immediately without checking."],1,"AI tools can hallucinate. Important claims need verification."],
["Responsible use","Which is a responsible use of AI for a school project?","You're planning a research presentation.",["Use AI for brainstorming, verify facts, follow school rules, and credit assistance when required.","Submit unverified AI text as your own research.","Paste classmates' private information into a public chatbot."],0,"Use AI to support learning, not replace judgment, violate privacy, or bypass academic rules."]
]
};

// Three additional original questions per lesson (four questions total per lesson).
const EXTRA = {"defense":[[["Credential stuffing","Which response best limits the damage?","A gaming platform announces a password breach. You used that same password for your school email, but no suspicious sign-ins have appeared yet.",["Wait for a sign-in alert before acting.","Change the reused password on every affected account, starting with email, and enable MFA.","Change only the gaming password because that site was breached."],1,"Attackers can test leaked credentials on unrelated sites. Change reused passwords everywhere, especially important accounts, and enable MFA."],["Password manager migration","Which plan is most secure?","Your family starts using a password manager. You need to replace several passwords you have memorized and reused.",["Generate unique passwords for each account and protect the manager with a strong master passphrase and MFA.","Use one new complex password for all accounts so the manager is easier to use.","Store the manager master password in a public note so you cannot lose it."],0,"A manager is most useful when each site gets a unique password; the master account itself needs strong protection."],["Shared club login","How should you redesign access?","Five club officers share one social media password. An officer graduates, and nobody knows whether they kept it.",["Keep the password because changing it may interrupt posts.","Send the password to all current members again.","Use individual roles where supported, revoke the former officer’s access, and rotate shared credentials if needed."],2,"Individual access and revocation reduce the risk from former members; shared credentials should be rotated when access changes."]],[["MFA fatigue","What is the safest next step?","You receive six unexpected sign-in approval prompts while studying. The last prompt says to approve to stop the notifications.",["Approve once to make the alerts stop.","Deny the prompts, check the account through its official app, and change credentials if needed.","Turn off MFA permanently so the notifications stop."],1,"Repeated unsolicited prompts can be an MFA-fatigue attack. Never approve a sign-in you did not initiate."],["Lost phone","Which preparation best prevents a lockout?","You use an authenticator app for your email. Your phone is being replaced tomorrow.",["Turn off MFA on every account indefinitely.","Assume your phone number alone will recover every account.","Securely back up or transfer authenticator access and store recovery codes before switching devices."],2,"Recovery codes and supported transfer methods help you regain access without weakening security."],["Push versus phishing-resistant MFA","Which option offers the strongest protection against a fake sign-in page?","Your school lets you choose SMS codes, app approval prompts, or a FIDO2 security key.",["A FIDO2 security key tied to the legitimate website.","An SMS code entered into whichever login page you opened.","An app approval prompt you accept without checking."],0,"FIDO2/WebAuthn security keys are phishing-resistant because authentication is bound to the legitimate site."]],[["Patch versus feature update","What should the team prioritize?","A laptop has a critical browser security update and an optional theme update. You have time for one before a school event.",["Install the theme update because it is smaller.","Install the verified browser security update first.","Delay both until someone reports an infection."],1,"Critical security fixes address known vulnerabilities and generally take priority over cosmetic updates."],["Unsupported operating system","Which plan best reduces risk?","A family computer no longer receives security patches, but it still opens websites and runs homework apps.",["Continue using it for banking because it still works.","Disable the firewall to improve performance.","Move sensitive activities to a supported device and plan an upgrade or replacement."],2,"Unsupported systems can accumulate unpatched vulnerabilities; reducing exposure and migrating to supported software lowers risk."],["Public computer session","What should you do before leaving?","You sign in to a school portal on a shared library computer using a private browsing window.",["Sign out of the portal and close the browser; do not rely on private mode alone.","Close the tab but leave the portal signed in.","Save the password in the browser for your next visit."],0,"Private browsing reduces local history storage but does not automatically end active website sessions."]],[["Extension permissions","Which choice is most defensible?","A browser extension promises to format citations but requests permission to read and change data on every website you visit.",["Install it because the browser store accepted it.","Look for a trusted alternative with narrower permissions or limit site access if supported.","Grant access and remove the extension only if ads appear."],1,"Broad permissions can expose information across sites; minimize access and evaluate the developer before installing."],["App installation file","What is the most reliable check?","A classmate sends a direct installer for a popular coding tool. The file name looks correct, but the link is a personal file-sharing folder.",["Install it because your classmate probably means well.","Run it first, then compare the website address.","Download from the verified developer source and check any published signature or checksum when available."],2,"File names and trusted senders do not prove integrity. Verified distribution channels and signatures help reduce tampering risk."],["Permission change","What should you do?","After an update, a photo-editing app requests access to all files and precise location, though you only edit screenshots.",["Grant only access needed for the task, such as selected photos, and deny unrelated location access.","Grant everything because updates always require broader access.","Turn off the phone’s security checks to avoid interruptions."],0,"Least-privilege permissions reduce the data an app can access if it is compromised or overcollects."]]],"scams":[[["School invoice","How should you verify this request?","An email using your principal’s display name asks the club treasurer to pay a new vendor immediately. The reply-to address is unfamiliar.",["Pay because the display name matches.","Confirm using the principal’s known school contact information and established payment process.","Reply to the email asking whether it is legitimate."],1,"Business-email-compromise scams can spoof names and redirect replies. Verify payment changes through an independent channel."],["QR code at school","What is the safest approach?","A sticker with a QR code covers the original QR code on a poster for a school fundraiser. Scanning opens a payment page.",["Pay because QR codes cannot be altered.","Assume the payment page is safe if it uses HTTPS.","Check the fundraiser’s official school page or organizer before paying through the replacement code."],2,"Attackers can replace QR codes to redirect payments. Independently verify the destination and organizer."],["Attachment from a contact","What is the best response?","A teacher you know emails an unexpected document asking you to enable macros to view a class schedule.",["Verify the request through a known channel and avoid enabling macros for an unexpected document.","Enable macros because the sender is familiar.","Forward the document to classmates to see whether it opens."],0,"Known accounts can be compromised; unexpected macro requests are a major warning sign."]],[["Subdomain trick","Which address belongs to the real example.com domain?","You are checking links that claim to lead to example.com.",["https://example.com.security-check.net/login","https://login.example.com/account","https://example-login.com/account"],1,"In login.example.com, example.com is the registrable domain. In the others, the actual domains differ."],["Encoded link","What is the best verification method?","A message displays the text “schoolportal.edu,” but hovering reveals a different destination.",["Trust the visible link text because it matches the school.","Click first and decide after entering your password.","Use your saved school bookmark or type the verified address yourself."],2,"Visible text can disguise the actual hyperlink destination. Navigate independently to avoid phishing."],["HTTPS misunderstanding","Which conclusion is justified?","A checkout page shows a padlock and HTTPS but its domain differs from the brand’s official site.",["The connection is encrypted, but the seller’s identity still needs verification.","The padlock proves the store is operated by the brand.","The padlock means purchases are refundable."],0,"HTTPS protects data in transit; scammers can obtain valid TLS certificates too."]],[["Fake marketplace escrow","What should you do?","A marketplace seller says the platform checkout is broken and sends a link to an “escrow” website with a similar logo.",["Use the link because escrow guarantees protection.","Stay within the platform’s official checkout and report attempts to move payment elsewhere.","Send half the payment first to test the seller."],1,"Moving payment outside the platform can remove buyer protections and lead to fake escrow scams."],["Review manipulation","What is the strongest evidence to seek?","A new store has hundreds of five-star reviews posted in two days and a huge discount countdown.",["The total number of five-star reviews on the store’s own page.","Whether the countdown restarts after refreshing.","Independent seller history, verified contact details, and reviews from unrelated sources."],2,"Independent corroboration is more reliable than reviews and timers controlled by the seller."],["Refund request","Which action is safest?","After you purchase an item, the seller says they can refund you only if you provide your online banking password.",["Refuse and use the payment provider’s official dispute or refund process.","Share the password because a refund requires account access.","Send a one-time code instead of the password."],0,"Refunds do not require handing over login credentials or one-time authentication codes."]],[["Voice impersonation","How should you respond?","Someone calls sounding exactly like a relative and urgently asks for money. They say not to call anyone else.",["Send money because the voice is familiar.","Hang up and verify through a known number or another trusted family contact.","Ask the caller to repeat your name, then pay."],1,"Voice cloning and social engineering can mimic familiar voices; independent verification is essential."],["Help-desk pretext","Which detail is the clearest red flag?","A caller claims to be school IT and asks you to read out the sign-in code that just arrived on your phone.",["They know the name of your school.","They call during school hours.","They request a one-time authentication code to access your account."],2,"One-time codes should not be shared with callers, even if they claim to be support."],["Authority and secrecy","What should you do?","A message claiming to be from a club advisor demands gift cards and says not to tell other officers because it is a surprise.",["Confirm with the advisor through an established contact method before taking action.","Buy the cards because the advisor has authority.","Reply with the gift card codes and ask for confirmation."],0,"Urgency, authority claims, and secrecy are common manipulation tactics; verify requests independently."]]],"privacy":[[["Indirect identification","Which information combination creates the greatest risk?","You plan to post a photo of a competition badge. It shows only your first name, but the caption includes your school, event date, and team number.",["The first name alone always identifies you uniquely.","The combined details could help strangers identify or locate you, so crop or omit unnecessary details.","No information is sensitive unless your home address appears."],1,"Several seemingly harmless details can combine to identify someone or reveal their activities."],["Club registration form","What should you collect?","Your club is creating a public interest form. The organizer proposes collecting full names, home addresses, birthdays, and favorite STEM topics.",["Collect everything in case it becomes useful later.","Publish the responses to encourage participation.","Collect only information needed for the club’s purpose and restrict access to responses."],2,"Data minimization reduces unnecessary exposure and limits the harm from accidental disclosure."],["Metadata in photos","What should you check?","You are sharing an original photo taken at home. The picture itself contains no address.",["Whether the file includes location metadata and whether the sharing service removes it.","Only whether the photo has enough pixels.","Whether the file name contains the word “private.”"],0,"Photos may contain EXIF location metadata even when the location is not visible in the image."]],[["Reshared private post","Which conclusion is most accurate?","You share a personal update with a small private group. A screenshot later appears in another group.",["Private groups prevent all copying.","Audience settings reduce access but cannot guarantee recipients will not redistribute content.","Deleting the original automatically deletes every screenshot."],1,"People with access may capture or reshare content; privacy settings are not a guarantee against redistribution."],["Searchable project history","What is the best precaution?","You are publishing a coding project that previously contained a test file with a personal phone number. You deleted the file in the latest commit.",["The number is impossible to recover after deletion.","Rename the repository to hide it.","Check repository history and remove exposed personal data appropriately before making it public."],2,"Version-control history can preserve deleted content. Removing it from the latest version alone may not erase exposure."],["Context collapse","Why reconsider posting this?","A sarcastic joke makes sense to close friends but may be viewed later by teachers or scholarship reviewers without the original context.",["Different audiences may interpret the same post differently, especially when context is missing.","Only followers can ever see posts.","Sarcasm is always obvious in screenshots."],0,"Digital content can travel beyond its original audience and be interpreted without its original context."]],[["Precise location request","Which setting best fits the situation?","A weather app needs your city for forecasts but requests precise location access all the time.",["Grant precise access permanently for convenience.","Use an approximate location or manually enter your city if the app supports it.","Disable all weather alerts and share your GPS publicly."],1,"Approximate or manual location can provide useful functionality without continuous precise tracking."],["Cross-app tracking","What is a realistic privacy improvement?","A social app asks permission to track activity across other apps and websites for advertising.",["Accept because tracking never includes personal information.","Delete every app on your device.","Decline unnecessary cross-app tracking where the operating system provides that option."],2,"Limiting tracking permissions can reduce advertising-related data collection across services."],["Old third-party access","What should you review?","Last year you connected a quiz service to your school account. You no longer use it, but it still has permission to read your profile.",["Review connected apps and revoke permissions you no longer need.","Change your wallpaper to clear permissions.","Assume uninstalling the quiz app always revokes cloud account access."],0,"Connected third-party permissions can persist after an app is removed; review and revoke unused access."]],[["Pressure to move platforms","What should you do?","A person you met in a game insists you move to an encrypted chat and turn off safety filters before they will keep talking.",["Comply because encryption means the person is trustworthy.","Keep your boundaries, avoid sharing private information, and disengage or report pressure.","Share your location first to prove you are real."],1,"Encryption protects message transport but does not establish another person’s trustworthiness."],["Sharing a classmate’s screenshot","What is the most respectful response?","A classmate sends you a screenshot of a private conversation and asks you to post it publicly to settle an argument.",["Post it because you did not take the screenshot.","Add identifying details so everyone knows who said it.","Avoid distributing private messages without consent and encourage resolving the issue privately or with appropriate support."],2,"Private messages can contain sensitive context; resharing can violate others’ privacy."],["Unwanted contact","What is a good next step?","An online acquaintance keeps making new accounts after you block them and asks for personal details.",["Save relevant evidence, use platform reporting/blocking tools, and seek help from a trusted adult.","Reply to every new account to explain your boundaries again.","Post your home address to show you are not afraid."],0,"Repeated unwanted contact warrants documentation, reporting, and trusted support rather than further engagement."]]],"threats":[[["Ransomware recovery","Which action improves recovery readiness?","A student club stores its only project files on one laptop. A ransomware incident could make them inaccessible.",["Keep one backup on the same laptop only.","Maintain tested backups separated from the main device, including an offline or protected copy.","Disable all account passwords to simplify recovery."],1,"Separate, tested backups reduce the chance that a single ransomware incident destroys every copy."],["Malware disguise","Which example best describes a trojan?","A free game installer secretly installs a credential-stealing program alongside the promised game.",["A network firewall filtering traffic.","A normal operating system update.","Malicious software disguised as a legitimate application."],2,"A trojan relies on deception to persuade users to install malicious software."],["Spyware versus adware","What distinguishes spyware?","Two unwanted programs are discovered: one displays ads; the other silently records browsing activity and sends it away.",["The second program monitors and collects information without proper authorization.","The second program is harmless because it shows no ads.","Both are automatically safe if downloaded from a website."],0,"Spyware secretly gathers information; lack of visible symptoms does not make it harmless."]],[["Browser redirects","What should you investigate?","Your browser search engine changes unexpectedly, and searches redirect to unfamiliar sites after an extension install.",["Buy a new laptop immediately without checking anything.","Review recently installed extensions and settings, then use trusted security tools or IT support.","Enter your passwords into the redirected site to restore settings."],1,"Unexpected redirects may indicate an unwanted extension or configuration change; investigate using trusted tools."],["Fake support alert","What is the safest immediate action?","A webpage fills the screen with a warning and a phone number claiming your files will be deleted unless you call in two minutes.",["Call and grant remote access.","Pay before the timer ends.","Avoid interacting with the warning, close the page, and check with legitimate security tools if concerned."],2,"Scareware uses urgency to push users toward fake support and malicious downloads."],["Symptom uncertainty","Which conclusion is best supported?","A laptop becomes hot and slow during a video call. A friend says this proves it has malware.",["Performance symptoms alone do not prove malware; check normal resource use and other indicators.","Heat always indicates spyware.","A slow laptop cannot have malware."],0,"Performance changes have many possible causes; security decisions should use evidence rather than one symptom."]],[["Email takeover","What should you prioritize?","You discover your email account was accessed by someone else. It is also used to reset passwords for several other services.",["Only change the password on a game account.","Secure email through the provider, review recovery settings and sessions, then protect linked accounts.","Delete all old emails and assume access is restored."],1,"Email is often an account-recovery hub, so compromise can affect connected services."],["Recovery method changed","What should you do?","After recovering an account, you notice an unfamiliar recovery email and a forwarding rule you never created.",["Leave them because the password was changed.","Forward your new password to the recovery address.","Remove unauthorized recovery and forwarding settings and review recent account activity."],2,"Attackers may leave persistence mechanisms such as forwarding rules or recovery contacts."],["OAuth access","What else matters after a compromise?","You change your password, but a suspicious third-party app still has permission to access your cloud files.",["Review and revoke unauthorized app permissions, since a password change may not remove every token.","Assume changing the password always revokes all third-party tokens.","Share your new password with the app to reset it."],0,"Connected apps may retain authorized access tokens until permissions are revoked."]],[["Incident containment","What should you do first?","A school computer displays a suspected malware alert while connected to shared network drives.",["Copy the suspicious file to classmates’ computers for testing.","Stop sensitive activity and promptly follow school IT instructions for reporting and isolation.","Delete random system folders before contacting anyone."],1,"Early reporting and approved containment steps help reduce spread and preserve evidence."],["Evidence handling","Which report is most useful?","A suspicious sign-in notification appears, and school IT asks what happened.",["A vague statement that the computer is broken.","A public social media post containing your password.","The approximate time, account involved, alert details, and any actions taken, shared securely with IT."],2,"Specific factual details support investigation without unnecessarily exposing credentials."],["Returning to normal","When is it reasonable to resume using an affected account?","A student account was compromised and IT has been investigating.",["After following official recovery steps and receiving confirmation that access is secure.","Immediately after the suspicious message disappears.","As soon as a stranger online says the issue is fixed."],0,"Recovery should follow trusted verification and account-security steps, not just the disappearance of symptoms."]]],"ai":[[["Model confidence","Which statement is most accurate?","An AI chatbot gives a detailed explanation with precise numbers and confident wording, but provides no sources.",["Detailed wording guarantees the answer was fact-checked.","Fluent, confident text does not guarantee accuracy; verify important claims independently.","The chatbot must have accessed a live database."],1,"Generative models can produce plausible but incorrect information without checking sources."],["Training versus retrieval","What should you ask about this AI answer?","An assistant claims to know today’s breaking news, but you cannot tell whether it has web access.",["Assume all AI models automatically browse the internet.","Assume no AI can ever access current information.","Check whether the tool has live retrieval and verify the claim against current reporting."],2,"A model’s training data may be outdated; live retrieval is tool-dependent and claims still need verification."],["AI and pattern recognition","Which task is generative rather than simple classification?","Your robotics club compares two AI systems. One labels images as “cat” or “dog”; the other creates a new image from a text description.",["Creating a new image from a prompt is generative AI.","Assigning an existing image to a label is always generative AI.","Neither task can use AI."],0,"Generative AI produces new content, while classification assigns categories to inputs."]],[["Synthetic audio","What is the best verification step?","A recording circulating online seems to show a school official announcing a surprise closure, but no official announcement exists.",["Assume the recording is authentic because the voice sounds accurate.","Check official school channels and independent confirmation before sharing.","Use an AI detector result as absolute proof."],1,"Synthetic audio can mimic voices; authentic sources and independent corroboration are stronger evidence."],["Detection uncertainty","What can you conclude from an AI detector?","An automated detector labels a student essay “92% AI-generated.” The student says they wrote it themselves.",["The percentage proves misconduct.","The student must be lying because detectors are objective.","The score is not definitive evidence; detectors can make mistakes and require careful contextual review."],2,"AI-content detectors can produce false positives and should not be treated as conclusive proof."],["Viral image context","What should you examine?","A dramatic photo spreads with a caption claiming it was taken during today’s storm. A reverse-image search finds the same photo from years ago.",["The image is being presented with misleading context, regardless of whether it was AI-generated.","The old photo proves every image from the storm is fake.","The photo is trustworthy because it has many shares."],0,"Misinformation can reuse genuine old images with false context; not all manipulated claims involve AI generation."]],[["Invented citations","What should you do?","An AI research summary includes an academic article title and DOI, but the DOI leads nowhere.",["Use the citation because it looks scholarly.","Locate and verify the original source independently; do not cite a reference you cannot confirm.","Change the DOI randomly until it works."],1,"AI may fabricate citations. A credible-looking reference is not proof that the source exists."],["Biased framing","How can you improve the analysis?","An AI response to a controversial technology policy only presents benefits and ignores documented costs.",["Accept the first answer as neutral.","Ask the model to sound more certain.","Consult reliable sources with different relevant perspectives and evaluate evidence for tradeoffs."],2,"Comparing evidence and perspectives helps counter incomplete or biased framing."],["Numerical hallucination","What should you do?","An AI tool gives a specific statistic about cybercrime but no date, definition, or source.",["Find the original dataset or a reputable report and confirm what the statistic measures.","Repeat it because precise numbers are usually accurate.","Round the number to make it more believable."],0,"Statistics require sources, dates, and definitions; AI-generated figures may be inaccurate or out of context."]],[["Private project data","Which workflow is most responsible?","Your club wants AI help drafting an announcement. A shared document also contains students’ personal contact information.",["Paste the full document into any chatbot.","Remove personal information and use only the necessary non-sensitive details, following school policy.","Ask the chatbot to promise not to remember the contacts."],1,"Data minimization and approved tools reduce the risk of exposing other people’s information."],["AI-assisted homework","Which approach best preserves academic integrity?","Your teacher allows AI for brainstorming but requires original analysis and disclosure.",["Submit the AI response verbatim with no disclosure.","Ask AI to hide evidence that it helped.","Use AI to brainstorm, independently develop the analysis, verify facts, and disclose assistance as required."],2,"Responsible AI use follows assignment rules and keeps the student accountable for the final work."],["High-stakes guidance","What is the best role for AI?","An AI assistant suggests a serious change to a medication regimen for someone in your family.",["Treat the suggestion as unverified information and consult a qualified clinician before decisions.","Follow it immediately because the response is detailed.","Ask several chatbots and follow whichever answer appears most often."],0,"AI can be mistaken; health decisions require qualified professional judgment."]]]};
const G={
defense:[
["Choose a password policy","You're setting up a club account.",["One shared password for all members.","Unique long passwords and individual access where possible.","Use the club name as the password."],1,"Unique credentials and appropriate access reduce exposure."],
["Configure account protection","Which option strengthens security?","You can enable an additional login step.",["Enable MFA.","Disable all login notifications.","Publish recovery codes."],0,"MFA makes unauthorized access more difficult."],
["Install a new tool","What is the safest approach?","You need a study app.",["Download from a trusted source and review requested permissions.","Install an unknown cracked version.","Approve every permission without reading."],0,"Trusted sources and minimal permissions reduce risk."]
],
scams:[
["A prize message","An account says you've won a free laptop and must enter your password.",["Enter it to claim the prize.","Verify independently and do not enter your password through the message.","Forward the link to everyone."],1,"Unexpected prizes and credential requests are common scam tactics."],
["A fake support agent","Someone asks for a one-time login code to 'verify' your identity.",["Give them the code.","Ask for their profile picture.","Do not share the code; contact official support independently."],2,"One-time codes are sensitive account credentials."],
["A suspicious checkout","A store has a misspelled brand domain and an implausible discount.",["Investigate the store's authenticity before buying.","Trust it because it has a lock icon.","Send a photo of your ID."],0,"HTTPS alone does not establish legitimacy. Check the domain and business."]
],
privacy:[
["Public profile review","Which detail should be removed from a public profile?","A fictional student's profile includes favorite music, hobbies, and their home address.",["Favorite music.","Home address.","A favorite color."],1,"A home address is sensitive personal information."],
["Location-sharing request","An app asks for continuous precise location for a feature that doesn't need it.",["Limit or deny unnecessary location access.","Allow forever automatically.","Post your location in a public chat."],0,"Use the least access necessary."],
["Sharing a group photo","What's the considerate next step before posting a photo of classmates?",["Post it publicly without asking.","Add everyone's names and school schedules.","Ask permission and check who can view it."],2,"Respect others' consent and privacy when sharing."]
],
threats:[
["Unexpected account alert","You see an unfamiliar sign-in notification.",["Open the provider's official app to review and secure your account.","Reply with your password.","Ignore repeated alerts."],0,"Use trusted recovery channels."],
["Suspicious computer","A device begins behaving unusually.",["Install a random pop-up cleaner.","Use approved security tools and contact trusted support.","Share unknown files to ask friends to open them."],1,"Avoid untrusted fixes and seek reliable support."],
["School incident","You think a school account was compromised.",["Hide it until the problem goes away.","Follow the school's reporting and account-recovery instructions promptly.","Send your password to the class group chat."],1,"Prompt reporting helps protect the account and others."]
],
ai:[
["Is this image real?","A viral image has no source, and someone claims it is AI-generated.",["Declare it fake based on one visual oddity.","Check its origin and independent reporting before deciding.","Assume it is real because it looks detailed."],1,"AI detection by appearance alone is unreliable."],
["AI gives medical advice","A chatbot recommends changing a medication.",["Follow the advice immediately.","Ask the chatbot to guess again.","Use qualified medical professionals for decisions and verify information."],2,"High-stakes decisions need qualified human guidance."],
["AI and homework","Which use supports learning responsibly?",["Brainstorm possible research questions, verify sources, and follow your school's AI rules.","Submit an entire generated essay as your own work.","Upload someone else's private messages for analysis."],0,"AI can help you learn without replacing your own work or exposing private data."]
]
};
const FINAL=[
["Account setup","A new app asks you to reuse your email password.",["Use a unique password and enable MFA if available.","Reuse it for convenience.","Send it to a friend."],0,"Unique passwords and MFA help protect accounts."],
["Suspicious offer","An urgent message requests a fee through a link.",["Pay immediately.","Verify through an official site you navigate to yourself.","Send your banking password."],1,"Check claims independently."],
["Personal details","A public profile lists your address and daily routine.",["Leave it because it looks friendly.","Add more information.","Remove unnecessary sensitive details."],2,"Public details can expose privacy and safety."],
["Security incident","Your account reports an unfamiliar sign-in.",["Use official recovery tools and review sessions.","Ignore it.","Share the password with the sender."],0,"Secure compromised accounts through trusted channels."],
["AI-generated claim","An AI tool confidently states a surprising fact.",["Assume it is accurate.","Verify with credible independent sources.","Publish it without checking."],1,"AI confidence is not proof of accuracy."]
];
const app=document.getElementById("app");
const state={xp:0,spent:0,owned:[],equipped:{theme:"classic",sticker:"none",cube:"blue",border:"classic"},certName:"",lessons:{},games:{},intro:{},final:false,sound:false,misses:{},practiceHistory:{},practiceSessions:0};
try{const stored=JSON.parse(localStorage.getItem("cwQuestV1")||"{}");Object.assign(state,stored);state.lessons=stored.lessons||{};state.games=stored.games||{};state.intro=stored.intro||{};state.owned=stored.owned||[];state.equipped=Object.assign({theme:"classic",sticker:"none",cube:"blue",border:"classic"},stored.equipped||{});state.spent=stored.spent||0;state.certName=stored.certName||"";state.misses=stored.misses||{};state.practiceHistory=stored.practiceHistory||{};state.practiceSessions=stored.practiceSessions||0}catch{}
let current=null,step=0,selection=null,checked=false,score=0,failed=false,audioContext=null;
const course=id=>COURSES.find(c=>c.id===id);
const lessonDone=(id,n)=>!!state.lessons[`${id}:${n}`];
const lessonsDone=id=>[0,1,2,3].every(n=>lessonDone(id,n));
const totalPieces=()=>COURSES.filter(c=>state.games[c.id]).length;
const allPieces=()=>totalPieces()===5;
const balance=()=>Math.max(0,state.xp-state.spent);
const save=()=>{localStorage.setItem("cwQuestV1",JSON.stringify(state));document.getElementById("xpValue").textContent=state.xp;const bal=document.getElementById("balanceValue");if(bal)bal.textContent=balance()};
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const style=c=>`style="--course:${c.color}"`;
function play(kind="tap"){
 if(!state.sound)return;
 try{audioContext=audioContext||new (window.AudioContext||window.webkitAudioContext)();const now=audioContext.currentTime;const notes=kind==="reward"?[523,659,784,1046]:kind==="good"?[550,760]:kind==="bad"?[290]:[430];
 notes.forEach((hz,i)=>{const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type="sine";osc.frequency.setValueAtTime(hz,now+i*.115);gain.gain.setValueAtTime(.0001,now+i*.115);gain.gain.exponentialRampToValueAtTime(.07,now+i*.115+.012);gain.gain.exponentialRampToValueAtTime(.0001,now+i*.115+.17);osc.connect(gain).connect(audioContext.destination);osc.start(now+i*.115);osc.stop(now+i*.115+.18)})}catch{}
}
function crestSVG(big=false){
 const colors=COURSES.map(c=>c.color), complete=allPieces();
 const sectors=colors.map((col,i)=>{const a=-Math.PI/2+i*Math.PI*2/5,b=a+Math.PI*2/5;const xy=t=>[130+111*Math.cos(t),130+111*Math.sin(t)];const p=xy(a),q=xy(b);return `<path d="M130 130 L${p.join(" ")} A111 111 0 0 1 ${q.join(" ")} Z" fill="${state.games[COURSES[i].id]?col:"#273454"}" stroke="#111a40" stroke-width="5"/>`}).join("");
 return `<svg class="crest ${complete?"activated":""}" viewBox="0 0 260 260" role="img" aria-label="ClickWise crest: ${totalPieces()} of 5 pieces earned${complete?", iridescent crest unlocked":""}">
 <defs><linearGradient id="iridescent" x1="0%" y1="0%" x2="100%" y2="100%"><stop stop-color="#a4e6ff"/><stop offset=".23" stop-color="#a59aff"/><stop offset=".47" stop-color="#f3c9fa"/><stop offset=".68" stop-color="#8ae4e5"/><stop offset=".85" stop-color="#dbe9ff"/><stop offset="1" stop-color="#b6a4ef"/></linearGradient></defs>
 <circle cx="130" cy="130" r="125" fill="#111a40" stroke="#a4b9ed" stroke-width="3"/>${complete?`<circle class="crest-glow" cx="130" cy="130" r="111" fill="url(#iridescent)" stroke="#efffff" stroke-width="3"/>`:sectors}
 <circle cx="130" cy="130" r="44" fill="#111a40" stroke="#dce9ff" stroke-width="3"/><text x="130" y="137" text-anchor="middle" fill="white" font-size="22" font-family="Outfit,Arial" font-weight="900">${complete?"✦":"CW"}</text>
 ${!complete?COURSES.map((c,i)=>{const a=-Math.PI/2+(i+.5)*Math.PI*2/5;return `<text x="${130+78*Math.cos(a)}" y="${135+78*Math.sin(a)}" font-size="21" text-anchor="middle" fill="white">${state.games[c.id]?"✦":"·"}</text>`}).join(""):""}
 </svg>`;
}
function nav(html){app.innerHTML=html;window.scrollTo({top:0,behavior:"instant"})}
function back(label,fn){return `<button class="top-back" data-action="${fn}">← ${label}</button>`}
function home(){
 const cards=COURSES.map((c,i)=>`<article class="course-card ${i===4?"wide":""}" ${style(c)}>
 <div class="course-top"><div class="course-icon">${c.icon}</div><span class="num">MODULE ${String(i+1).padStart(2,"0")}</span></div>
 <h3>${c.name}</h3><p>${c.subtitle}</p>
 <div class="course-bottom"><span class="tag">${state.games[c.id]?"✦ Crest collected":`${[0,1,2,3].filter(n=>lessonDone(c.id,n)).length}/4 lessons complete`}</span>
 <button class="course-open" data-action="open" data-id="${c.id}">${state.games[c.id]?"Revisit module":state.intro[c.id]?"Continue quest":"Explore module"} →</button></div></article>`).join("");
 nav(`<section class="hero"><div><p class="eyebrow">COMPUTER SAFETY MADE EASY</p><h1>Stay Sharp.<br>Stay Safe.<br><span class="gradient-text">Stay ClickWise.</span></h1>
 <p class="description">Explore five digital safety worlds, master real-life challenges, and assemble your own iridescent ClickWise Crest.</p>
 <div class="actions"><button class="btn primary" data-action="practice">✧ AI Practice Lab</button><button class="btn primary" data-action="open" data-id="${COURSES.find(c=>!state.games[c.id])?.id||"defense"}">Start your quest ↗</button><button class="btn subtle" data-action="final">Final challenge ${allPieces()?"↗":"🔒"}</button><button class="btn subtle" data-action="shop">✦ XP Shop</button></div></div>
 <div class="crest-wrap">${crestSVG()}<div class="crest-caption">${allPieces()?"✦ IRIDESCENT CREST UNLOCKED":`${totalPieces()} / 5 CREST PIECES COLLECTED`}</div><p class="tiny">${allPieces()?"Your five disciplines have united.": "Finish each module's mini-game to collect a piece."}</p></div></section>
 <div class="section-title"><div><p class="eyebrow">THE LEARNING PATH</p><h2>Five worlds. One mission.</h2></div><span class="tag">20 lessons · 5 mini-games</span></div>
 <section class="course-grid">${cards}</section>
 <div class="section-title"><div><p class="eyebrow">THE FINAL TRIAL</p><h2>The ClickWise Challenge</h2></div></div>
 <div class="panel"><p class="muted">Collect all five crest pieces to transform your emblem into an iridescent crest, unlock a mixed-skills mission, and earn your ClickWise Certificate of Completion.</p><button class="btn ${allPieces()?"primary":""}" data-action="final">${state.final?"View certificate":allPieces()?"Enter final challenge →":"🔒 Collect all five pieces to unlock"}</button></div>`);
}
function openCourse(id){const c=course(id);if(!c)return;if(!state.intro[id])intro(id);else path(id)}
function intro(id){const c=course(id);nav(`${back("All modules","home")}<section class="intro" ${style(c)}><div class="mini-label" style="color:${c.color}">✦ MODULE ${COURSES.indexOf(c)+1} / 5</div><h1>${c.name}</h1><p>${c.intro}</p><h3>In this module, you'll explore:</h3><div class="intro-points">${c.lessons.map(x=>`<div class="intro-point"><span>✓</span>${x}</div>`).join("")}</div><p class="tip">Complete all four lessons (four questions each) and the <strong>${c.game}</strong> mini-game to open your reward chest and collect the ${c.name} crest piece.</p><div class="actions"><button class="btn primary" data-action="begin" data-id="${id}">Begin module →</button></div></section>`)}
function path(id){const c=course(id);const steps=c.lessons.map((name,n)=>{const locked=n>0&&!lessonDone(id,n-1),done=lessonDone(id,n);return `<div class="path-step"><button class="node ${locked?"locked":done?"done":""}" data-action="lesson" data-id="${id}" data-n="${n}" ${locked?"disabled":""} aria-label="${name}, ${done?"completed":locked?"locked":"available"}">${done?"✓":locked?"🔒":["⌁","◇","↻","▣"][n]}</button><div class="node-label">${name}</div><div class="node-hint">${done?"Completed":locked?"Complete the previous lesson":"Tap to begin"}</div></div>`}).join("");
 const gameUnlocked=lessonsDone(id);
 nav(`${back("All modules","home")}<div class="path-header" ${style(c)}><div><p class="eyebrow" style="color:#e6eaff">MODULE ${COURSES.indexOf(c)+1} / 5</p><h1>${c.name}</h1><p>${c.subtitle}</p></div><div class="tag">${[0,1,2,3].filter(n=>lessonDone(id,n)).length} / 4 lessons</div></div>
 <div class="path-board" ${style(c)}><div class="path-list">${steps}<div class="path-step"><button class="node game ${gameUnlocked?"":"locked"}" data-action="game" data-id="${id}" ${gameUnlocked?"":"disabled"} aria-label="${c.game} mini-game">🎮</button><div class="node-label">${c.game}</div><div class="node-hint">${gameUnlocked?"Unit mini-game":"Unlock by finishing four lessons"}</div></div>
 <div class="path-step"><button class="node chest ${state.games[id]?"done":"locked"}" data-action="chest" data-id="${id}" ${state.games[id]?"":"disabled"} aria-label="Open crest reward chest">🎁</button><div class="node-label">Crest reward chest</div><div class="node-hint">${state.games[id]?"Open your reward":"Finish the mini-game to unlock"}</div></div></div></div>`);
}
function start(mode,id,n=0){current={mode,id,n};step=0;score=0;failed=false;selection=null;checked=false;renderQuestion()}
function questions(){
 if(current.mode==="lesson")return [Q[current.id][current.n],...EXTRA[current.id][current.n]];
 if(current.mode==="game"){
  // Mini-games use a shorter authoring format: [title, scenario, options, correct, explanation].
  // Normalize to the same six-field format as lessons and the final challenge.
  return G[current.id].map(q=>Array.isArray(q[2])?[q[0],"Choose the safest response.",q[1],q[2],q[3],q[4]]:q);
 }
 return FINAL.map(q=>Array.isArray(q[2])?[q[0],"Choose the safest response.",q[1],q[2],q[3],q[4]]:q);
}
function renderQuestion(){
 const qs=questions(),q=qs[step],c=course(current.id),title=current.mode==="lesson"?c.lessons[current.n]:current.mode==="game"?c.game:"The ClickWise Challenge";
 const heading=current.mode==="lesson"?"LESSON":current.mode==="game"?"UNIT MINI-GAME":"FINAL CHALLENGE";
 selection=null;checked=false;
 nav(`${back(current.mode==="final"?"Homepage":"Learning path",current.mode==="final"?"home":"path")}${current.mode!=="final"?`<div class="mini-label" style="color:${c.color}">${c.icon} ${c.name}</div>`:"<div class='mini-label'>✦ ALL FIVE DISCIPLINES</div>"}
 <section class="quiz-layout panel"><div class="quiz-top"><span>${heading} · ${escapeHTML(title)}</span><span>${step+1} / ${qs.length}</span></div><div class="progress"><div class="progress-fill" style="width:${step/qs.length*100}%"></div></div>
 <h2 class="question-title">${escapeHTML(q[0])}</h2><p class="muted">${escapeHTML(q[1])}</p><div class="scenario">${escapeHTML(q[2])}</div>
 <div class="choices">${q[3].map((a,i)=>`<button class="choice" data-action="choose" data-n="${i}"><span class="letter">${String.fromCharCode(65+i)}</span>${escapeHTML(a)}</button>`).join("")}</div>
 <div id="feedback" hidden></div><div class="quiz-actions"><button class="btn subtle" data-action="backquiz">Exit</button><button class="btn primary" id="check" data-action="check" disabled>Check answer ✓</button><button class="btn primary" id="next" data-action="next" hidden>${step===qs.length-1?"Finish →":"Continue →"}</button></div></section>`);
}
function choose(i){if(checked)return;selection=i;document.querySelectorAll(".choice").forEach((el,n)=>el.classList.toggle("selected",i===n));document.getElementById("check").disabled=false;play()}
function check(){
 if(checked||selection===null)return;checked=true;const q=questions()[step],correct=selection===q[4];if(correct)score++;
 document.querySelectorAll(".choice").forEach((el,i)=>{el.disabled=true;if(i===q[4])el.classList.add("correct");else if(i===selection)el.classList.add("incorrect")});
 if(!correct)recordMiss(current.mode==="final"?"mixed":current.id,q[0]+" "+q[1]+" "+q[2]);
 const f=document.getElementById("feedback");f.hidden=false;f.className="feedback "+(correct?"good":"");f.innerHTML=`<strong>${correct?"✓ That's right!":"↻ Good chance to learn."}</strong><br>${escapeHTML(q[5])}`;
 document.getElementById("check").hidden=true;
 if(correct){
  document.getElementById("next").hidden=false;
 }else{
  failed=true;
  document.getElementById("next").hidden=true;
  const actions=document.querySelector(".quiz-actions");
  const retry=document.createElement("button");
  retry.className="btn primary";
  retry.textContent="Try again from the beginning ↻";
  retry.dataset.action="retryattempt";
  actions.appendChild(retry);
  f.innerHTML += "<br><strong>No XP or progress awarded for this attempt. Retry the challenge to earn credit.</strong>";
 }
 play(correct?"good":"bad");
}
function next(){if(!checked||failed)return;if(step<questions().length-1){step++;renderQuestion()}else finish()}
function finish(){
 if(failed)return;
 const {mode,id,n}=current;
 if(mode==="lesson"){
 const key=`${id}:${n}`,newly=!state.lessons[key];state.lessons[key]=true;if(newly)state.xp+=20;save();play("reward");
 reward("lesson",id,`Lesson complete!`,`You've finished ${course(id).lessons[n]}.`,newly?20:0);
 }else if(mode==="game"){
 if(score!==questions().length){play("bad");reward("retry",id,"One more try!","Complete every challenge correctly to earn your crest piece.",0);return}
 const newly=!state.games[id];state.games[id]=true;if(newly)state.xp+=80;save();play("reward");reward("game",id,"Mini-game complete!",`You solved all ${score} challenges. Your crest reward chest is ready to open.`,newly?80:0);
 }else{
 if(score!==questions().length){play("bad");reward("finalRetry",null,"Almost there!","Complete every challenge correctly to earn your certificate.",0);return}
 const newly=!state.final;state.final=true;if(newly)state.xp+=150;save();play("reward");reward("final",null,"Digital safety mastered!",`You passed the final challenge with ${score} of 5 correct answers.`,newly?150:0);
 }
}
function reward(type,id,title,desc,xp){
 nav(`<section class="reward panel"><div class="reward-icon">${type==="game"?"🎮":type==="lesson"?"✦":type==="final"?"🏆":type.includes("Retry")||type==="retry"?"🧠":"🎁"}</div>
 <p class="eyebrow">CLICKWISE QUEST</p><h1>${title}</h1><p class="muted">${desc}</p>${xp?`<div class="pill">✦ +${xp} XP earned</div>`:""}
 <div class="actions">${type==="lesson"?`<button class="btn primary" data-action="path" data-id="${id}">Back to learning path →</button>`:type==="game"?`<button class="btn primary" data-action="chest" data-id="${id}">Open reward chest 🎁</button>`:type==="retry"?`<button class="btn primary" data-action="game" data-id="${id}">Try mini-game again ↻</button>`:type==="finalRetry"?`<button class="btn primary" data-action="final">Try final challenge again ↻</button>`:`<button class="btn primary" data-action="certificate">View your certificate →</button>`}</div></section>`);
}
function chest(id){
 if(!state.games[id])return path(id);
 const c=course(id);play("reward");
 nav(`${back("Learning path","path")}<section class="reward panel"><div class="reward-icon">🎁</div><p class="eyebrow">REWARD UNLOCKED</p><h1>${c.name} Crest</h1><p class="muted">You've earned one of the five pieces of the ClickWise Crest.</p><div style="font-size:70px;color:${c.color};text-shadow:0 0 30px ${c.color}">✦</div><div class="pill">${totalPieces()} / 5 crest pieces</div>${allPieces()?`<h2 class="gradient-text">The crest is complete!</h2><p class="muted">All five pieces have merged into one iridescent emblem. Your final challenge is unlocked.</p>${crestSVG()}`:""}<div class="actions"><button class="btn primary" data-action="${allPieces()?"final":"home"}">${allPieces()?"Enter the final challenge →":"Return to homepage →"}</button></div></section>`);
}
function finalScreen(){
 if(state.final)return certificate();
 if(!allPieces()){home();return}
 nav(`${back("Homepage","home")}<section class="intro"><p class="eyebrow">FINAL CHALLENGE UNLOCKED</p><div class="crest-wrap">${crestSVG()}</div><h1 class="gradient-text">The ClickWise Challenge</h1><p>Five cybersecurity disciplines. One final mission. Apply everything you've learned across account security, scams, privacy, incident response, and responsible AI use.</p><div class="intro-point">✦ Answer all five questions correctly in one attempt to earn your ClickWise Certificate of Completion.</div><div class="actions"><button class="btn primary" data-action="startfinal">Begin the final challenge →</button></div></section>`);
}
function certificate(){
 if(!state.final){home();return}
 const date=new Date().toLocaleDateString(undefined,{year:"numeric",month:"long",day:"numeric"});
 const theme=state.equipped.theme||"classic",border=state.equipped.border||"classic",sticker=state.equipped.sticker||"none";
 const stickerText={none:"",star:"✦",robot:"🤖",shield:"🛡️",heart:"💜",moon:"☾"}[sticker]||"";
 nav(`<div class="no-print">${back("Homepage","home")}<div class="actions"><button class="btn subtle" data-action="shop">✦ Shop for certificate decorations</button></div></div>
 <div class="certificate cert-theme-${theme} cert-border-${border}" id="certificate">
 <div class="cert-seal">✦ ◈ ✦</div><p class="eyebrow">CLICKWISE · DIGITAL SAFETY QUEST</p><h1>Certificate of Completion</h1>
 <p>This certifies that</p><input id="certName" aria-label="Name for certificate" maxlength="60" placeholder="Your name" autocomplete="off" value="${escapeHTML(state.certName)}">
 <p>has successfully completed all five ClickWise modules,<br>their skill challenges, and the final Digital Safety Quest.</p>
 <div class="cert-sticker" aria-label="Equipped decorative sticker">${stickerText}</div>
 <div class="cert-seal">✦ ✦ ✦ ✦ ✦</div><p><strong>STAY SHARP. STAY SAFE. STAY CLICKWISE.</strong></p>
 <p class="cert-date">${escapeHTML(date)} · ClickWise educational achievement (not a professional certification)</p></div>
 <div class="actions no-print" style="justify-content:center"><button class="btn primary" data-action="print">Print / Save as PDF</button><button class="btn subtle" data-action="home">Return home</button></div>`);
}

// --- Interactive game worlds ---
const GAME_META={
 defense:{name:"Firewall Fortress",label:"Build your cyber fortress",instructions:"Pick the strongest defense for each challenge. Every correct choice adds a reinforced block. Then watch a cyber-bomb attack your tower!",emoji:"🏰"},
 scams:{name:"The Scam Files",label:"Solve the mystery",instructions:"Inspect each case's evidence, then identify the safest response. Solve all three cases to close the investigation.",emoji:"🕵️"},
 privacy:{name:"Data Dash",label:"Choose the perfect jump",instructions:"Your cube runs through three digital gaps. Every privacy decision controls your jump distance. Only safe choices land on the next platform!",emoji:"◈"},
 threats:{name:"Cyber Crisis",label:"Save the school network",instructions:"You are the incident commander. Use your dashboard to make the right response and restore the network to full health.",emoji:"🖥️"},
 ai:{name:"Reality Check",label:"Investigate before trusting",instructions:"Use the investigation tools to examine each AI-related case, then decide what the evidence supports.",emoji:"✧"}
};
const SHOP_ITEMS=[
 {id:"aurora",kind:"theme",name:"Aurora Certificate",price:150,icon:"🌌",desc:"Iridescent lavender and blue certificate"},
 {id:"ice",kind:"theme",name:"Icy Silver Certificate",price:120,icon:"❄️",desc:"Cool metallic silver background"},
 {id:"midnight",kind:"theme",name:"Midnight Certificate",price:100,icon:"🌙",desc:"Deep indigo certificate"},
 {id:"circuit",kind:"border",name:"Circuit Border",price:85,icon:"▦",desc:"Futuristic geometric border"},
 {id:"star",kind:"sticker",name:"Star Sticker",price:45,icon:"✦",desc:"A glowing star on your certificate"},
 {id:"robot",kind:"sticker",name:"Robot Sticker",price:65,icon:"🤖",desc:"A little robot on your certificate"},
 {id:"shield",kind:"sticker",name:"Shield Sticker",price:65,icon:"🛡️",desc:"Show off your security skills"},
 {id:"heart",kind:"sticker",name:"Heart Sticker",price:45,icon:"💜",desc:"A purple heart"},
 {id:"moon",kind:"sticker",name:"Moon Sticker",price:45,icon:"☾",desc:"An icy moon"},
 {id:"violet",kind:"cube",name:"Violet Cube",price:80,icon:"🟪",desc:"Purple Data Dash character"},
 {id:"mint",kind:"cube",name:"Mint Cube",price:80,icon:"🟩",desc:"Glacial cyan Data Dash character"},
 {id:"silver",kind:"cube",name:"Silver Cube",price:100,icon:"⬜",desc:"Metallic AI-inspired runner cube"}
];
const GAME_TOOLS={
 scams:["Inspect sender","Check domain","Verify independently"],
 ai:["Check source","Find evidence","Check context"]
};
let mini=null;
function gameQuestion(){
 const q=G[mini.id][mini.step];
 // Support both the original five-field and expanded six-field challenge records.
 return Array.isArray(q[2])?q:[q[0],`${q[1]} — ${q[2]}`,q[3],q[4],q[5]];
}
function startMiniGame(id){
 if(!course(id)||!lessonsDone(id))return path(id);
 mini={id,step:0,correct:0,failed:false,choice:null,checked:false,inspected:[],blocks:[]};
 renderMiniGame();
}
function gameVisual(){
 const id=mini.id;
 if(id==="defense"){
  const blocks=mini.blocks.map((b,i)=>`<div class="tower-brick ${b?"strong":"weak"}" title="${b?"Reinforced defense":"Fragile defense"}">${b?"🛡":"!"}</div>`).join("");
  return `<div class="fortress-stage"><div class="tower-stack">${blocks||'<div class="empty-tower">Your fortress starts here ↑</div>'}</div><div class="tower-ground"></div><div class="bomb-icon" aria-hidden="true">💣</div></div><p class="tiny">Blocks placed: ${mini.blocks.length}/3 · Reinforced: ${mini.blocks.filter(Boolean).length}</p>`;
 }
 if(id==="scams"){
  const q=gameQuestion();
  return `<div class="evidence-board"><div class="evidence-header">📁 CASE ${mini.step+1}: ${escapeHTML(q[0])}</div>
  <div class="evidence-paper"><div class="paper-meta">DIGITAL EVIDENCE · CONFIDENTIAL CASE FILE</div>${escapeHTML(q[1])}</div>
  <div class="investigate-tools">${GAME_TOOLS.scams.map((t,i)=>`<button class="tool-btn ${mini.inspected.includes(i)?"used":""}" data-mini="inspect" data-n="${i}">${mini.inspected.includes(i)?"✓ ":"⌕ "}${t}</button>`).join("")}</div>
  <div class="tool-result">${mini.inspected.length?escapeHTML(["Sender names can be imitated. Verify the sender using an independent channel.","Examine exact domains and links, not just familiar logos.","Unexpected requests should be confirmed through an official website or known contact."][mini.inspected[mini.inspected.length-1]]):"Select an investigation tool to inspect the case."}</div></div>`;
 }
 if(id==="privacy"){
  const colors={blue:"#4d83f5",violet:"#9066e9",mint:"#36b9c7",silver:"#b8c5d8"};
  const cubeColor=colors[state.equipped.cube]||colors.blue;
  const jump=mini.checked?(mini.failed?"failed":"success"):"ready";
  return `<div class="runner-stage"><div class="runner-stars">✦ · ✧ · ✦ · ✧</div><div class="runner-platform left"></div><div class="runner-platform right"></div><div class="runner-cube ${jump}" style="--cube:${cubeColor}"><span>✦</span></div><div class="runner-gap">DATA GAP ${mini.step+1} / 3</div><div class="runner-hazard">⌁</div></div><p class="tiny">Choose a safe privacy decision to make the perfect jump. Wrong decisions miss the platform.</p>`;
 }
 if(id==="threats"){
  const health=mini.correct*30+10;
  return `<div class="crisis-stage"><div class="crisis-head"><span>◉ SCHOOL NETWORK · INCIDENT CONTROL</span><span class="status-light">● LIVE</span></div>
   <div class="crisis-grid"><div class="crisis-monitor"><span>NETWORK HEALTH</span><strong>${health}%</strong><div class="health-bar"><i style="width:${health}%"></i></div></div>
   <div class="crisis-monitor"><span>ACTIVE INCIDENT</span><strong class="crisis-alert">${mini.step<3?"!":"✓"}</strong><small>${escapeHTML(gameQuestion()[0])}</small></div></div>
   <div class="crisis-log">SYSTEM LOG &gt; ${escapeHTML(gameQuestion()[1])}</div></div>`;
 }
 return `<div class="ai-lab"><div class="lab-head">✧ REALITY CHECK · CASE ${mini.step+1}</div><div class="lab-evidence">${escapeHTML(gameQuestion()[1])}</div>
 <div class="investigate-tools">${GAME_TOOLS.ai.map((t,i)=>`<button class="tool-btn ${mini.inspected.includes(i)?"used":""}" data-mini="inspect" data-n="${i}">${mini.inspected.includes(i)?"✓ ":"◇ "}${t}</button>`).join("")}</div>
 <div class="tool-result">${mini.inspected.length?escapeHTML(["Identify who published the claim and whether the source is credible.","Compare the claim with reliable independent evidence.","Look at the original context; appearances alone cannot prove whether content is AI-generated."][mini.inspected[mini.inspected.length-1]]):"Use an investigation tool to reveal a research hint."}</div></div>`;
}
function renderMiniGame(){
 const c=course(mini.id),m=GAME_META[mini.id],q=gameQuestion();
 nav(`${back("Learning path","path")}<section class="game-screen" ${style(c)}>
 <div class="game-head"><div><div class="mini-label">${m.emoji} ${c.name.toUpperCase()} MINI-GAME</div><h1>${m.name}</h1><p>${m.instructions}</p></div><div class="game-round">ROUND<br><strong>${mini.step+1} / 3</strong></div></div>
 ${gameVisual()}
 <div class="game-prompt"><div class="eyebrow">DECISION ${mini.step+1}</div><h2>${escapeHTML(q[0])}</h2><p>${escapeHTML(q[1])}</p></div>
 <div class="game-options">${q[2].map((v,i)=>`<button class="game-option" data-mini="answer" data-n="${i}"><span class="letter">${"ABC"[i]}</span>${escapeHTML(v)}</button>`).join("")}</div>
 <div id="gameFeedback" class="game-feedback" hidden></div>
 <div class="actions" id="gameNextActions"></div></section>`);
}
function miniAction(el){
 if(!mini)return;
 const type=el.dataset.mini,n=Number(el.dataset.n);
 if(type==="inspect"){
  if(!mini.inspected.includes(n))mini.inspected.push(n);
  // Update only the investigation panel so choices remain available.
  const c=mini.id;
  document.querySelector(".investigate-tools").outerHTML=gameVisual().match(/<div class="investigate-tools">[\s\S]*?<\/div>/)[0];
  document.querySelector(".tool-result").textContent=c==="scams"?["Sender names can be imitated. Verify the sender using an independent channel.","Examine exact domains and links, not just familiar logos.","Unexpected requests should be confirmed through an official website or known contact."][n]:["Identify who published the claim and whether the source is credible.","Compare the claim with reliable independent evidence.","Look at the original context; appearances alone cannot prove whether content is AI-generated."][n];
  play("tap");return;
 }
 if(type==="answer"&&!mini.checked){
  const q=gameQuestion(),good=n===q[3];mini.checked=true;mini.choice=n;
  if(good)mini.correct++;else{mini.failed=true;recordMiss(mini.id,q[0]+" "+q[1]);}
  if(mini.id==="defense")mini.blocks.push(good);
  document.querySelectorAll(".game-option").forEach((b,i)=>{b.disabled=true;if(i===q[3])b.classList.add("correct");else if(i===n)b.classList.add("incorrect")});
  const feedback=document.getElementById("gameFeedback");feedback.hidden=false;feedback.classList.toggle("good",good);
  feedback.innerHTML=`<strong>${good?"✓ Excellent defense!":"✕ Not quite — your attempt ends here."}</strong><p>${escapeHTML(q[4])}</p>${good?"":"<p>No XP awarded. Retry the mini-game to earn your crest.</p>"}`;
  const actions=document.getElementById("gameNextActions");
  if(good)actions.innerHTML=`<button class="btn primary" data-mini="${mini.step===2?"complete":"next"}">${mini.step===2?"See the results →":"Continue →"}</button>`;
  else actions.innerHTML=`<button class="btn primary" data-mini="restart">Restart game ↻</button>`;
  if(mini.id==="privacy"){const cube=document.querySelector(".runner-cube");cube.classList.add(good?"success":"failed")}
  if(mini.id==="defense"){const stack=document.querySelector(".tower-stack");stack.innerHTML=mini.blocks.map(b=>`<div class="tower-brick ${b?"strong":"weak"}">${b?"🛡":"!"}</div>`).join("")}
  if(mini.id==="threats"){document.querySelector(".crisis-monitor strong").textContent=`${mini.correct*30+10}%`;document.querySelector(".health-bar i").style.width=`${mini.correct*30+10}%`}
  play(good?"good":"bad");return;
 }
 if(type==="restart"){startMiniGame(mini.id);return}
 if(type==="next"&&mini.checked&&!mini.failed){mini.step++;mini.checked=false;mini.inspected=[];renderMiniGame();return}
 if(type==="complete"&&mini.checked&&!mini.failed&&mini.correct===3){miniComplete()}
}
function miniComplete(){
 const id=mini.id,c=course(id),first=!state.games[id];
 const survived=mini.blocks.filter(Boolean).length;
 const bonus=id==="defense"?survived*10:30; // three correct decisions earn the same skill bonus
 const awarded=first?80+bonus:0;
 if(first){state.games[id]=true;state.xp+=awarded;save()}
 play("reward");
 const special=id==="defense"?`<div class="tower-attack"><div class="tower-result">💥</div><div class="tower-survivors">${mini.blocks.map(()=>'🧱').join(" ")}</div><p>3 / 3 reinforced blocks survived the simulated cyber-bomb!</p></div>`:id==="privacy"?`<div class="tower-result">◈</div><p>Three perfect jumps! Your cube crossed every data gap.</p>`:id==="scams"?`<div class="tower-result">🕵️</div><p>All three scam files solved.</p>`:id==="threats"?`<div class="tower-result">🛡️</div><p>Network health restored to 100%.</p>`:`<div class="tower-result">✧</div><p>All three AI cases investigated successfully.</p>`;
 nav(`<section class="reward panel"><p class="eyebrow">MINI-GAME COMPLETE</p><h1>${GAME_META[id].name}</h1>${special}
 <p class="muted">${first?`+80 completion XP and +${bonus} skill bonus XP!`:"Already completed — no duplicate XP."}</p>
 <div class="actions"><button class="btn primary" data-action="chest" data-id="${id}">Open your crest chest 🎁</button><button class="btn subtle" data-action="shop">Visit XP Shop ✦</button></div></section>`);
}
function shop(){
 const sections=[["Certificate Themes","theme"],["Certificate Decorations","border"],["Stickers","sticker"],["Runner Cube Colors","cube"]];
 const cards=sections.map(([heading,kind])=>`<h2 class="shop-heading">${heading}</h2><div class="shop-grid">${SHOP_ITEMS.filter(i=>i.kind===kind).map(item=>{
  const owned=state.owned.includes(item.id),equipped=state.equipped[item.kind]===item.id;
  return `<div class="shop-item"><div class="shop-icon">${item.icon}</div><h3>${item.name}</h3><p>${item.desc}</p><button class="btn ${equipped?"subtle":"primary"}" data-shop="${owned?"equip":"buy"}" data-id="${item.id}" ${equipped||(!owned&&balance()<item.price)?"disabled":""}>${equipped?"✓ Equipped":owned?"Equip":`✦ ${item.price} XP`}</button></div>`;
 }).join("")}</div>`).join("");
 nav(`${back("Homepage","home")}<div class="shop-hero"><p class="eyebrow">CLICKWISE REWARDS</p><h1>XP Shop ✦</h1><p>Make your certificate and Data Dash cube your own. Earn XP by learning; spend it on optional rewards.</p>
 <div class="shop-balance"><span>AVAILABLE XP</span><strong>✦ <span id="balanceValue">${balance()}</span></strong><small>Total earned: ${state.xp} XP · Spent: ${state.spent} XP</small></div></div>
 <div class="shop-notice">Your certificate is always free to earn and download. Purchased designs are yours to keep, and spending XP never lowers your lifetime XP.</div>
 ${cards}<div class="shop-heading"><h2>Equipped items</h2></div>
 <div class="panel"><p>Certificate: ${escapeHTML(state.equipped.theme)} · Border: ${escapeHTML(state.equipped.border)} · Sticker: ${escapeHTML(state.equipped.sticker)} · Runner cube: ${escapeHTML(state.equipped.cube)}</p>
 <div class="actions"><button class="btn subtle" data-shop="default" data-kind="theme">Default certificate</button><button class="btn subtle" data-shop="default" data-kind="sticker">Remove sticker</button><button class="btn subtle" data-shop="default" data-kind="cube">Blue cube</button>${state.final?'<button class="btn primary" data-action="certificate">View certificate →</button>':""}</div></div>`);
}
function shopAction(el){
 const type=el.dataset.shop,id=el.dataset.id;
 if(type==="default"){const kind=el.dataset.kind;state.equipped[kind]=kind==="theme"||kind==="border"?"classic":kind==="cube"?"blue":"none";save();shop();return}
 const item=SHOP_ITEMS.find(x=>x.id===id);if(!item)return;
 if(type==="buy"){
  if(state.owned.includes(id)||balance()<item.price)return;
  state.spent+=item.price;state.owned.push(id);
 }
 if(type==="buy"||type==="equip"){
  if(!state.owned.includes(id))return;
  state.equipped[item.kind]=id;save();play("reward");shop();
 }
}


// ---- Personalized Practice Lab: privacy-first adaptive practice ----
// Misses are saved only in this browser. The optional AI endpoint receives topic
// labels (never names, emails, answers, or raw student data).
const TOPICS={
 defense:{name:"Password & Device Defense",description:"Passwords, MFA, updates, downloads, and permissions"},
 scams:{name:"Phishing & Scam Detection",description:"Suspicious messages, links, impersonation, and verification"},
 privacy:{name:"Privacy & Digital Footprints",description:"Personal information, permissions, public posts, and boundaries"},
 threats:{name:"Incident Response",description:"Malware warning signs, compromised accounts, and safe response"},
 ai:{name:"AI Literacy",description:"Deepfakes, misinformation, bias, and verification"}
};
const PRACTICE_BANK={
 defense:[
 ["A password manager suggests a unique 18-character password. What is the best reason to use it?",["It is unique and hard to guess.","It will never need protection.","It can safely be shared publicly."],0,"Long, unique passwords reduce the risk of guessing and credential reuse."],
 ["You receive an MFA approval notification, but you aren't logging in. What should you do?",["Approve it to dismiss the notification.","Deny it and review your account security.","Send your code to the requester."],1,"Unexpected MFA prompts can indicate an attempted account login."],
 ["A drawing app requests access to your contacts. What is the safest response?",["Allow everything automatically.","Disable device updates first.","Decline unnecessary permissions."],2,"Only grant permissions an app genuinely needs."],
 ["Your browser offers a security update. What should you do?",["Install the update from the browser's official updater.","Ignore all updates forever.","Download a random patch from a pop-up."],0,"Official updates often fix security vulnerabilities."],
 ["Your friend asks to borrow your password to log into a shared project. What's safer?",["Text them your password.","Use a shared workspace with separate accounts.","Post your password in the group chat."],1,"Separate accounts and appropriate access protect individual credentials."],
 ["An unfamiliar site offers a paid app for free as a cracked download. What is safest?",["Install it quickly.","Disable security warnings.","Use the official app source instead."],2,"Unofficial downloads may contain malware."]
 ],
 scams:[
 ["A text claims your package is stuck and asks you to pay through a shortened link. What should you do?",["Check the order through the delivery company's official site.","Pay immediately.","Forward your card details."],0,"Unexpected payment links should be independently verified."],
 ["An email appears to be from your teacher but asks for a gift card. What's safest?",["Buy the gift card.","Verify with the teacher through a known channel.","Reply with your home address."],1,"Impersonators can copy familiar names and email formatting."],
 ["A URL is paypaI-support.example rather than the official domain. What matters most?",["The logo looks authentic.","It has colorful buttons.","The actual domain doesn't match the official site."],2,"Look closely at the real domain, not visual branding."],
 ["Someone asks for a one-time sign-in code to 'fix' your account. What should you do?",["Never share the code; use official support channels.","Send the code quickly.","Post the code publicly."],0,"One-time codes can let an attacker access an account."],
 ["A post promises a free phone if you enter your school password. What is safest?",["Try it once.","Avoid entering credentials and verify the offer independently.","Share the offer with friends first."],1,"Unexpected prizes requesting credentials are common phishing tactics."],
 ["A website looks familiar, but the link came from an unexpected DM. What should you check?",["Only the page colors.","Only the number of likes.","The exact URL and official source."],2,"Visual similarity is not proof that a website is legitimate."]
 ],
 privacy:[
 ["A photo contains your school ID and full name. What should you do before posting?",["Remove or obscure personal details.","Post it publicly for everyone.","Add your phone number."],0,"Personal identifiers can be misused when shared publicly."],
 ["A flashlight app asks for precise location all the time. What's best?",["Allow it forever.","Deny access it doesn't need.","Share your location on social media."],1,"Apps should only have the permissions needed for their functions."],
 ["An online stranger asks for your home address. What should you do?",["Give the full address.","Share your school instead.","Keep it private and talk to a trusted adult if concerned."],2,"Avoid sharing sensitive personal information with strangers."],
 ["You want to delete an embarrassing public post. What should you remember?",["Copies or screenshots may still exist.","Deleting always removes every copy.","Nobody can ever save a post."],0,"Digital footprints can persist through screenshots and archives."],
 ["A game profile displays your real-time location. What is a safer setting?",["Enable public location sharing.","Turn off unnecessary location sharing.","Add your daily schedule."],1,"Limit information that reveals where you are."],
 ["A site asks to sell your data to advertising partners. What should you do?",["Accept without reading.","Post your passwords.","Review the privacy choices and opt out when possible."],2,"Understanding and limiting data collection protects privacy."]
 ],
 threats:[
 ["A device suddenly shows unfamiliar apps and account alerts. What's the best first step?",["Stop interacting with suspicious prompts and get trusted help.","Click every alert.","Ignore the warnings forever."],0,"Unexpected changes deserve careful investigation using trusted support."],
 ["You learn your account password was exposed in a breach. What should you do?",["Keep using the same password.","Change it to a unique password and review MFA.","Share it with friends."],1,"Replacing exposed passwords and enabling MFA reduce account risk."],
 ["A pop-up says to call a random number for 'virus removal.' What is safest?",["Call and give remote access.","Pay immediately.","Close it and use trusted device security tools."],2,"Scareware pop-ups can impersonate security warnings."],
 ["You clicked a suspicious link on a school device. What should you do?",["Report it promptly to school IT or a trusted adult.","Hide it from everyone.","Download unknown cleanup software."],0,"Prompt reporting can help contain a security incident."],
 ["A shared class file unexpectedly requests you enable macros. What should you do?",["Enable them automatically.","Verify the file's source and ask for help before proceeding.","Forward it to everyone."],1,"Unexpected macros can carry malicious code."],
 ["A friend says their account is sending strange messages. What's safest?",["Send them your password.","Click the links to investigate.","Contact them through another channel and suggest securing the account."],2,"An alternate channel helps verify whether an account is compromised."]
 ],
 ai:[
 ["A realistic video makes an extraordinary claim. What's the best response?",["Verify with independent reliable sources.","Assume it is real because it looks realistic.","Share it immediately."],0,"Visual realism alone cannot establish authenticity."],
 ["An AI chatbot gives a medical statistic without a source. What should you do?",["Treat it as certain.","Check the claim using trustworthy sources.","Repeat it as fact."],1,"Generative AI can produce confident but incorrect information."],
 ["A viral image might be AI-generated. What can establish its origin?",["Only counting fingers.","Only looking at its colors.","Finding provenance and credible original reporting."],2,"Appearance-based clues are unreliable; source context matters."],
 ["An AI tool gives two groups different recommendations. What should you consider?",["Potential bias and fairness concerns.","That AI is always neutral.","That its output needs no review."],0,"AI systems can reflect bias in training data or design."],
 ["You use AI to brainstorm a school assignment. What's a responsible next step?",["Submit unverified text as your own work.","Verify information and follow your school's AI rules.","Include made-up citations."],1,"Responsible use includes accuracy checks and following academic policies."],
 ["A fake audio clip appears to imitate a public figure. What is safest?",["Assume it is genuine.","Spread it quickly.","Check trusted reporting and source context before believing it."],2,"AI-generated audio can imitate voices; verify before sharing."]
 ]
};
let practice=null;
function classifyTopic(module,text=""){
 if(module&&TOPICS[module])return module;
 const t=String(text).toLowerCase();
 if(/phish|scam|fraud|link|url|impersonat|sender|email/.test(t))return "scams";
 if(/privacy|location|personal|data|profile|share/.test(t))return "privacy";
 if(/malware|virus|compromis|incident|breach|infect/.test(t))return "threats";
 if(/deepfake|artificial intelligence|generative|misinformation|bias/.test(t))return "ai";
 return "defense";
}
function recordMiss(module,text){
 const topic=classifyTopic(module,text);
 state.misses[topic]=Math.min(999,(Number(state.misses[topic])||0)+1);
 save();
}
function topicRank(){
 return Object.keys(TOPICS).sort((a,b)=>{
  const sa=(state.misses[a]||0)-(state.practiceHistory[a]||0)*.5;
  const sb=(state.misses[b]||0)-(state.practiceHistory[b]||0)*.5;
  return sb-sa;
 });
}
function practiceHome(){
 const ranked=topicRank(),total=Object.values(state.misses).reduce((a,b)=>a+Number(b||0),0);
 const topicCards=ranked.map(id=>{
  const m=state.misses[id]||0,done=state.practiceHistory[id]||0;
  return `<div class="practice-topic"><div><h3>${TOPICS[id].name}</h3><p>${TOPICS[id].description}</p></div><div class="topic-stats"><strong>${m} missed</strong><small>${done} correct in practice</small></div></div>`;
 }).join("");
 nav(`${back("Homepage","home")}<section class="practice-hero"><div class="mini-label">✧ CLICKWISE PERSONALIZED LEARNING</div><h1>AI Practice Lab</h1><p>Turn your mistakes into mastery. ClickWise recommends cybersecurity concepts based on questions you've missed, then gives you fresh practice scenarios.</p><div class="practice-metrics"><div><strong>${total}</strong><span>Missed questions recorded</span></div><div><strong>${state.practiceSessions||0}</strong><span>Practice sessions</span></div><div><strong>${ranked.length}</strong><span>Concept areas</span></div></div></section>
 <div class="panel practice-start"><h2>Your recommended focus: ${TOPICS[ranked[0]].name}</h2><p class="muted">${total?"This is based on your missed questions. Practice helps reinforce the concepts you find difficult.":"No missed questions yet! You can still try a mixed practice session."}</p>
 <div class="actions"><button class="btn primary" data-practice="start" data-mode="adaptive">✧ Start personalized practice</button><button class="btn subtle" data-practice="start" data-mode="mixed">Try mixed practice</button></div>
 <p class="tiny">Practice uses a curated offline question bank by default. When you run the optional AI server, you can request newly generated scenarios. No name, email, or personal details are sent to the AI service.</p></div>
 <div class="section-title"><h2>Concept tracker</h2></div><div class="practice-topics">${topicCards}</div>
 <div class="panel"><h3>Generate brand-new AI questions</h3><p class="muted">Requires the Cloudflare Worker configured in script.js. If the AI service is unavailable, ClickWise automatically uses the offline practice bank.</p><button class="btn subtle" data-practice="start" data-mode="ai">✧ Generate AI practice</button></div>`);
}
function practiceFallback(mode){
 const ranked=topicRank(),offset=(state.practiceSessions||0);
 const chosen=mode==="mixed"?[...ranked.slice(offset%5),...ranked.slice(0,offset%5)]:ranked;
 const counts={};return Array.from({length:5},(_,i)=>{
  const topic=chosen[i%chosen.length];
  const list=PRACTICE_BANK[topic],prior=counts[topic]||0;counts[topic]=prior+1;
  const index=(offset+prior*2+i)%list.length;
  const q=list[index];
  return {topic,question:q[0],options:q[1],answer:q[2],explanation:q[3],source:"offline"};
 });
}
function practiceValid(items){
 return Array.isArray(items)&&items.length===5&&items.every(q=>
  q&&TOPICS[q.topic]&&typeof q.question==="string"&&q.question.length>=20&&q.question.length<=350&&
  Array.isArray(q.options)&&q.options.length===3&&q.options.every(x=>typeof x==="string"&&x.length>0&&x.length<230)&&
  Number.isInteger(q.answer)&&q.answer>=0&&q.answer<3&&
  typeof q.explanation==="string"&&q.explanation.length>=15&&q.explanation.length<=500);
}
// Set this to your Cloudflare Worker URL after deployment, without a trailing slash.
// Example: https://clickwise-ai.your-account.workers.dev
const CLICKWISE_AI_WORKER_URL = "https://clickwise-ai.firebreather9217.workers.dev";
async function startPractice(mode){
 const questions=practiceFallback(mode);
 practice={questions,step:0,correct:0,answered:false,selected:null,loading:mode==="ai",source:"offline"};
 if(mode==="ai"){
  nav(`${back("Practice Lab","practice")}<div class="panel"><h2>Generating your practice...</h2><p class="muted">Preparing safe cybersecurity scenarios. If AI is unavailable, we'll use offline practice instead.</p><div class="progress"><div class="progress-fill" style="width:55%"></div></div></div>`);
  try{
   const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),25000);
   let response;
   try{response=await fetch(CLICKWISE_AI_WORKER_URL.replace(/\/$/, "")+"/api/practice",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({topics:topicRank().slice(0,3)}),signal:controller.signal})}finally{clearTimeout(timer)}
   if(!response.ok)throw Error("AI service unavailable");
   const data=await response.json();
   if(!practiceValid(data.questions))throw Error("Invalid AI questions");
   practice.questions=data.questions.map(q=>({...q,source:"ai"}));practice.source="ai";
  }catch{practice.source="offline"}
 }
 renderPracticeQuestion();
}
function renderPracticeQuestion(){
 const q=practice.questions[practice.step],i=practice.step;
 nav(`${back("Practice Lab","practice")}<section class="panel practice-quiz"><div class="quiz-top"><span>✧ PERSONALIZED PRACTICE · ${practice.source==="ai"?"AI-GENERATED":"CURATED OFFLINE"}</span><span>${i+1} / ${practice.questions.length}</span></div>
 <div class="progress"><div class="progress-fill" style="width:${i/practice.questions.length*100}%"></div></div>
 <div class="mini-label">${TOPICS[q.topic].name}</div><h2>${escapeHTML(q.question)}</h2>
 <div class="game-options">${q.options.map((opt,j)=>`<button class="game-option" data-practice="answer" data-n="${j}"><span class="letter">${"ABC"[j]}</span>${escapeHTML(opt)}</button>`).join("")}</div>
 <div id="practiceFeedback" class="game-feedback" hidden></div><div class="actions" id="practiceActions"></div></section>`);
}
function practiceAnswer(n){
 if(!practice||practice.answered)return;
 const q=practice.questions[practice.step],correct=n===q.answer;
 practice.answered=true;if(correct){practice.correct++;state.practiceHistory[q.topic]=(state.practiceHistory[q.topic]||0)+1}
 else recordMiss(q.topic,q.question);
 save();play(correct?"good":"bad");
 document.querySelectorAll(".game-option").forEach((el,i)=>{el.disabled=true;if(i===q.answer)el.classList.add("correct");else if(i===n)el.classList.add("incorrect")});
 const fb=document.getElementById("practiceFeedback");fb.hidden=false;fb.classList.toggle("good",correct);
 fb.innerHTML=`<strong>${correct?"✓ Correct!":"↻ Keep practicing!"}</strong><p>${escapeHTML(q.explanation)}</p>`;
 document.getElementById("practiceActions").innerHTML=`<button class="btn primary" data-practice="next">${practice.step===practice.questions.length-1?"View results →":"Next question →"}</button>`;
}
function practiceNext(){
 if(!practice||!practice.answered)return;
 if(practice.step<practice.questions.length-1){practice.step++;practice.answered=false;renderPracticeQuestion();return}
 state.practiceSessions=(state.practiceSessions||0)+1;save();
 const correct=practice.correct,total=practice.questions.length,focus=topicRank()[0];
 nav(`${back("Practice Lab","practice")}<section class="reward panel"><div class="reward-icon">✧</div><p class="eyebrow">PRACTICE COMPLETE</p><h1>${correct} / ${total} correct</h1>
 <p class="muted">${correct===total?"Excellent work! You answered every practice question correctly.":"Every mistake helps identify what to practice next."}</p>
 <p class="pill">Recommended next: ${TOPICS[focus].name}</p>
 <p class="tiny">Practice is for learning and does not award XP, so replaying questions cannot be used to farm shop currency.</p>
 <div class="actions"><button class="btn primary" data-practice="start" data-mode="adaptive">Practice again ↻</button><button class="btn subtle" data-action="practice">View concept tracker</button></div></section>`);
}
function practiceAction(el){
 const a=el.dataset.practice;
 if(a==="start")startPractice(el.dataset.mode);
 else if(a==="answer")practiceAnswer(Number(el.dataset.n));
 else if(a==="next")practiceNext();
}

function action(el){
 const a=el.dataset.action,id=el.dataset.id,n=Number(el.dataset.n);
 if(a==="retryattempt"){start(current.mode,current.id,current.n)}else if(a==="home")home();else if(a==="open")openCourse(id);else if(a==="begin"){state.intro[id]=true;save();path(id)}else if(a==="path")path(id||current?.id||"defense");
 else if(a==="lesson")start("lesson",id,n);else if(a==="game")startMiniGame(id);else if(a==="choose")choose(n);else if(a==="check")check();else if(a==="next")next();else if(a==="backquiz"){current.mode==="final"?home():path(current.id)}
 else if(a==="chest")chest(id);else if(a==="final")finalScreen();else if(a==="startfinal")start("final",null);else if(a==="certificate")certificate();else if(a==="shop")shop();else if(a==="practice")practiceHome();else if(a==="print")window.print();
}
document.addEventListener("click",e=>{
 const game=e.target.closest("[data-mini]");if(game&&!game.disabled){miniAction(game);return}
 const item=e.target.closest("[data-shop]");if(item&&!item.disabled){shopAction(item);return}
 const practice=e.target.closest("[data-practice]");if(practice&&!practice.disabled){practiceAction(practice);return}
 const el=e.target.closest("[data-action]");if(el&&!el.disabled)action(el)
});
document.addEventListener("input",e=>{if(e.target.id==="certName"){state.certName=e.target.value;save()}});
document.getElementById("homeLink").addEventListener("click",e=>{e.preventDefault();home()});
document.getElementById("soundToggle").addEventListener("click",()=>{state.sound=!state.sound;save();soundLabel();play("good")});
function soundLabel(){const b=document.getElementById("soundToggle");b.textContent=state.sound?"♫":"♪̸";b.title=state.sound?"Mute sounds":"Enable sounds";b.setAttribute("aria-label",b.title)}
soundLabel();save();home();
