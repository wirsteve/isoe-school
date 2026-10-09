# FDA guidance — Computer Software Assurance for Production and Quality Management System Software (February 2026) — EXCERPT

Source: U.S. Food and Drug Administration, CDRH and CBER. *Computer Software Assurance for
Production and Quality Management System Software: Guidance for Industry and Food and Drug
Administration Staff.* FDA guidance database listing (checked 2026-10-09): issue date
02/03/2026, status "Final," docket FDA-2022-D-0795. Tier: **FDA guidance** — not regulation.
PDF URL: https://www.fda.gov/media/188844/download
Retrieved: 2026-10-09 (PDF downloaded directly from fda.gov; HTTP 200 this session).

**Excerpt only** (41-page document): PDF pages 4–7 (Sections I Introduction, II Background,
III Scope, and the opening of IV Definitions) and PDF pages 24–26 (the end of Section V.A and all of Section V.B, Considerations for Electronic Records
Requirements). Extracted verbatim; line breaks follow the PDF layout. Scope note for drafters:
this guidance covers software used as part of **medical device manufacturers'** production or
quality management systems, and its Scope section expressly excludes device software functions
(BECS is itself a device). It does not govern a blood establishment's validation of BECS.

---
[[page 4]]
Contains Nonbinding Recommendations
1
Computer Software Assurance for 
Production and Quality Management 
System Software
Guidance for Industry and
Food and Drug Administration Staff
This guidance represents the current thinking of the Food and Drug Administration (FDA or 
Agency) on this topic. It does not establish any rights for any person and is not binding on 
FDA or the public. You can use an alternative approach if it satisfies the requirements of the 
applicable statutes and regulations. To discuss an alternative approach, contact the FDA staff 
or Office responsible for this guidance as listed on the title page. 
I. Introduction1 
 FDA is issuing this guidance to provide recommendations on computer software assurance for 
computers and automated data processing systems used as part of medical device production or 
the quality management system. This guidance:
· Describes “computer software assurance” as a risk-based approach to establish 
confidence in the automation used for production or quality management systems, and 
identifies where additional rigor may be appropriate; and
· Describes various methods and testing activities that may be applied to establish 
computer software assurance and provide objective evidence to fulfill regulatory 
requirements, such as computer software validation requirements in quality management 
system obligations, including requirements in 21 CFR Part 820, which includes 
1 This guidance has been prepared by the Center for Devices and Radiological Health (CDRH) and the Center for 
Biologics Evaluation and Research (CBER) in consultation with the Center for Drug Evaluation and Research 
(CDER), Office of Combination Products (OCP), and Office of Inspections and Investigations (OII).
[[page 5]]
Contains Nonbinding Recommendations
2
incorporations by reference of the 2016 edition of ISO 134852 (hereafter referred to as 
“Part 820”).3
This guidance supplements FDA’s guidance, “General Principles of Software Validation” 
(hereafter referred to as the “Software Validation guidance”) except this guidance supersedes 
Section 6: Validation of Automated Process Equipment and Quality System Software of the 
Software Validation guidance.
For the current edition of the FDA-recognized consensus standard referenced in this document, 
see the FDA Recognized Consensus Standards Database.4  
In general, FDA’s guidance documents do not establish legally enforceable responsibilities. 
Instead, guidances describe the Agency’s current thinking on a topic and should be viewed only 
as recommendations, unless specific regulatory or statutory requirements are cited. The use of 
the word should in Agency guidances means that something is suggested or recommended, but 
not required.
II. Background 
FDA envisions a future state where the medical device ecosystem is inherently focused on device 
features and manufacturing practices that promote product quality and patient safety. FDA has 
sought to identify and promote successful manufacturing practices and help device 
manufacturers raise their manufacturing quality level. In doing so, one goal is to help 
manufacturers produce high-quality medical devices that align with the laws and regulations 
implemented by FDA. Compliance with quality management system obligations including those 
in Part 820 is required for manufacturers of finished medical devices to the extent they engage in 
operations to which those obligations apply. Quality management system obligations include 
requirements for medical device manufacturers to develop, conduct, control, and monitor 
production processes to ensure that a device conforms to its specifications,5 including 
requirements for manufacturers to validate computer software used as part of production or the 
2 All references to ISO 13485 in this guidance are to ISO 13485:2016, Medical devices —  Quality management 
systems —  Requirements for regulatory purposes.
3 On February 2, 2024, FDA issued a final rule amending the device Quality System Regulation, 21 CFR Part 820, 
to align more closely with international consensus standards for devices (89 FR 7496, available at 
https://www.federalregister.gov/d/2024-01709). This final rule took effect on February 2, 2026. This rule removed 
the majority of the current requirements in Part 820, including 21 CFR 820.70, and instead incorporates by reference 
the 2016 edition of the International Organization for Standardization (ISO) 13485, Medical devices - Quality 
management systems – Requirements for regulatory purposes, in Part 820. As stated in the final rule, the 
requirements in ISO 13485 are, when taken in totality, substantially similar to the requirements of the current Part 
820, providing a similar level of assurance in a firm’s quality management system and ability to consistently 
manufacture devices that are safe and effective and otherwise in compliance with the Federal Food, Drug, and 
Cosmetic Act (FD&C Act). 
4 Available at https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfStandards/search.cfm
5 See Subclause 7.5 of ISO 13485.
[[page 6]]
Contains Nonbinding Recommendations
3
quality management system for its intended use.6,7 The recommendations on computer software 
assurance in this guidance are intended to promote product quality and patient safety, and 
correlate to higher-quality outcomes. This guidance addresses practices relating to computers and 
automated data processing systems used as part of production or the quality management system.
In recent years, advances in manufacturing technologies, including the adoption of automation, 
robotics, simulation, and other digital capabilities, have allowed manufacturers to reduce sources 
of error, optimize resources, and reduce patient risk. FDA recognizes the potential for these 
technologies to provide significant benefits for enhancing the quality, availability, and safety of 
medical devices, and has undertaken several efforts to help foster the adoption and use of such 
technologies. 
Specifically, FDA has engaged with stakeholders via the Medical Device Innovation Consortium 
(MDIC), site visits to medical device manufacturers, and benchmarking efforts with other 
industries (e.g., automotive, consumer electronics) to keep abreast of the latest technologies and 
to better understand stakeholders’ challenges and opportunities for further advancement. As part 
of these ongoing efforts, medical device manufacturers have expressed a desire for greater clarity 
regarding the Agency’s expectations for software validation for computers and automated data 
processing systems used as part of production or the quality management system. Given the 
rapidly changing nature of software, manufacturers have also expressed a desire for a more 
iterative, agile approach for validation of computer software used as part of production or the 
quality management system.
Traditionally, software validation has often been accomplished via software testing and other 
verification activities conducted at each stage of the software development life cycle. However, 
as explained in FDA’s Software Validation guidance, software testing alone is often insufficient 
to establish confidence that the software is fit for its intended use. Instead, the Software 
Validation guidance recommends that “software quality assurance” focus on preventing the 
introduction of defects into the software development process, and it encourages use of a risk-
based approach for establishing confidence that software is fit for its intended use.
FDA believes that applying a risk-based approach to computer software used as part of 
production or the quality management system would better focus manufacturers’ quality 
assurance activities to help ensure product quality while helping to fulfill validation 
requirements. For these reasons, FDA is providing recommendations on computer software 
assurance for computers and automated data processing systems used as part of medical device 
production or the quality management system. FDA believes that these recommendations will 
help foster the adoption and use of innovative technologies that promote patient access to high-
quality medical devices and help manufacturers to keep pace with the dynamic, rapidly changing 
technology landscape, while promoting compliance with laws and regulations implemented by 
FDA.
6 See Subclauses 4.1.6, 7.5.6, and 7.6 of ISO 13485.
7 This guidance discusses the “intended use” of computer software used as part of production or the quality 
management system (see Subclauses 4.1.6 and 7.5.6 of ISO 13485), which is different from the intended use of the 
device itself (see 21 CFR 801.4).
[[page 7]]
Contains Nonbinding Recommendations
4
III. Scope 
This guidance provides recommendations regarding computer software assurance for computers 
or automated data processing systems used as part of production or the quality management 
system for medical devices. 
This guidance is not intended to provide a complete description of all software validation 
principles. FDA has previously outlined principles for software validation, including managing 
changes as part of the software life cycle, in FDA’s Software Validation guidance. This guidance 
applies the risk-based approach to software validation discussed in the Software Validation 
guidance to production or quality management system software. This guidance additionally 
discusses specific risk considerations, acceptable testing methods, and efficient generation of 
objective evidence for production or quality management system software through the life cycle 
of the medical device.
This guidance does not provide recommendations for the design and development verification or 
validation requirements for device software functions, which are software functions that meet the 
definition of a device under section 201(h) of the Federal Food, Drug, and Cosmetic Act (FD&C 
Act). For more information regarding FDA’s recommendations for the validation of medical 
device software, see the Software Validation guidance.
IV. Definitions 
The following definitions apply for the purposes of this guidance.8
Cloud Computing (Cloud): Cloud computing is a model for enabling ubiquitous, convenient, 
on-demand network access to a shared pool of configurable computing resources (e.g., networks, 
servers, storage, applications, and services) that can be rapidly provisioned and released with 
minimal management effort or service provider interaction. This cloud model is composed of 
five essential characteristics: on-demand self-service, broad network access, resource pooling, 
rapid elasticity, and measured service. The cloud is composed of three service models: software 
as a service (SaaS), platform as a service (PaaS), and infrastructure as a service (IaaS). The cloud 
model is also composed of four deployment models: private cloud, community cloud, public 
cloud, and hybrid cloud.9  
Infrastructure as a service (IaaS): The capability provided to the consumer is to provision 
processing, storage, networks, and other fundamental computing resources where the consumer 
is able to deploy and run arbitrary software, which can include operating systems and 
applications. The consumer does not manage or control the underlying cloud infrastructure but 
has control over operating systems, storage, and deployed applications; and possibly limited 
8 Some of the definitions originate from other FDA sources (e.g., Software Validation guidance) and are applicable 
in those instances.
9 This definition is derived from the National Institute of Standards and Technology’s “The NIST Definition of 
Cloud Computing: Recommendations of the National Institute of Standards and Technology,” available at 
https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf

[...]

[[page 24]]
Contains Nonbinding Recommendations
21
· Goal: Ensure that analyses can be correctly created, read, updated, and deleted 
· Testing objectives and activities:
· Create new analysis: Passed
· Read data from the required source: Passed
· Update data in the analysis: Failed due to input error, then passed re-test
· Delete data: Passed
· Verify through observation that all calculated fields correctly update with 
changes: Passed with noted deviation  
· Deviation: During the testing of the update, when the user inadvertently input text into 
an updatable field requiring numeric data, the associated row showed an immediate error.
· Conclusion: The spreadsheet is acceptable for its intended use. Incorrectly inputting text 
into the field is immediately visible and does not impact the intended use. A new 
validation rule was placed on the field to permit only numeric data inputs. The testing 
was performed again with the validation rule and the update passed all testing objectives. 
No additional errors were observed in the spreadsheet functions after the validation rule 
was implemented. 
· When/Who: July 9, 2025, by Jane Smith
B. Considerations for Electronic Records Requirements 
Manufacturers have expressed confusion and concern regarding the application of 21 CFR Part 
11, Electronic Records; Electronic Signatures, to computers or automated data processing 
systems used as part of production or the quality management system. Manufacturers should 
refer to the “Part 11, Electronic Records; Electronic Signatures – Scope and Application” 
guidance (hereafter referred to as the “Electronic Records guidance”), when determining whether 
and how to apply 21 CFR Part 11 (hereafter referred to as “Part 11”).
The regulations in Part 11 set forth the criteria under which FDA considers electronic records, 
electronic signatures, and handwritten signatures executed to electronic records to be 
trustworthy, reliable, and generally equivalent to paper records and handwritten signatures 
executed on paper (see 21 CFR 11.1(a)). In general, Part 11 applies to records in electronic form 
that are created, modified, maintained, archived, retrieved, or transmitted under any records 
requirements set forth in Agency regulations (see 21 CFR 11.1(b)). Part 11 also applies to 
electronic records submitted to the Agency under requirements of the FD&C Act and the Public 
Health Service Act (PHS Act), even if such records are not specifically identified in Agency 
regulations (see 21 CFR 11.1(b)). The underlying requirements set forth in the FD&C Act, PHS 
Act, and FDA regulations (other than Part 11) are referred to as “predicate rules.” In addition, 
where electronic signatures and their associated electronic records meet the requirements of Part 
11, FDA will generally consider the electronic signatures to be equivalent to full handwritten 
signatures, initials, and other general signings as required by agency regulations (21 CFR 
11.1(c)).
For computer software used as part of production or the quality management system, the 
applicable predicate rules include those under Part 820. A document required under Part 820—
including, but not necessarily limited to, a document Part 820 requires to bear a signature— and 
maintained in electronic form would generally be an “electronic record” under Part 11 (see 
[[page 25]]
Contains Nonbinding Recommendations
22
21 CFR 11.3(b)(6)). To determine when a record is required under Part 820, manufacturers 
should consider, among other things, whether the record would be necessary as evidence to 
document required validation. If a manufacturer maintains in electronic form a document 
required under Part 820, then Part 11 generally applies.
Example: Documentation demonstrating that a management enterprise system correctly and 
reliably automates checking materials before use in production would generally be necessary as 
evidence for a manufacturer to support a validated state. In this example, Part 11 would generally 
apply to the documentation if in electronic form.
Example: Upon application startup, a COTS automatically saves routine activity logs. However, 
in this case, these activity logs are not necessary as evidence for a manufacturer to support a 
validated state. In this example, Part 11 would not apply to the activity logs.
As discussed in the Electronic Records guidance, FDA intends to exercise enforcement 
discretion regarding specific Part 11 requirements for validation of computerized systems used to 
create, modify, maintain, or transmit electronic records (see 21 CFR 11.10(a) and 11.30). But the 
enforcement discretion policy described in the Electronic Records guidance (concerning 
validation of computerized systems used to create, modify, maintain, or transmit electronic 
records) expressly does not apply to validation requirements for computer software used as part 
of production or the quality management system arising under Subclauses 4.1.6, 7.5.6, and 7.6 of 
ISO 13485.
This guidance recommends that manufacturers base their approach to computer software 
assurance on a justified and documented risk assessment and a determination of the potential of 
the system to affect product quality, patient safety, and record integrity. Manufacturers may 
utilize a least-burdensome, risk-based approach outlined in this guidance to provide assurance 
that the software that maintains electronic records subject to Part 11 performs as intended.  
[[page 26]]
Contains Nonbinding Recommendations
23
