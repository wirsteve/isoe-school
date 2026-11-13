# FDA guidance — General Principles of Software Validation (January 2002) — EXCERPT

Source: U.S. Food and Drug Administration, CDRH and CBER. *General Principles of Software
Validation; Final Guidance for Industry and FDA Staff.* Issued January 11, 2002.
PDF URL: https://www.fda.gov/media/73141/download
Retrieved: 2026-11-13 (PDF downloaded directly from fda.gov; HTTP 200 this session).
Tier: **FDA guidance** — not regulation ("Contains Nonbinding Recommendations").

Scope notes for drafters:
- Written for **medical device manufacturers** under the (pre-QMSR) Quality System regulation;
  it reaches a blood establishment only as a widely used statement of FDA's validation thinking
  (FDA's 2013 BECS user-facility guidance, `sources/fda-guidance/becs-validation-users-facility-2013.md`,
  is the blood-specific document). Never present it as binding on Lakeshore.
- The PDF now carries a front-page notice (reproduced verbatim below) that FDA's Computer
  Software Assurance guidance **supersedes Section 6** of this guidance, and that the QMSR took
  effect February 2, 2026. Section 6 is therefore NOT excerpted. The notice dates the CSA
  guidance's issue as September 24, 2025; FDA's guidance database listing recorded in
  `sources/fda-guidance/csa-production-qms-software-2026-excerpt.md` shows 02/03/2026. Don't
  assert either date as "the" CSA issue date without re-checking; say "FDA's Computer Software
  Assurance guidance" without a date where possible.
- Excerpted sections: the front-page notice; 3.1.1–3.1.2 (requirements/specifications,
  verification/validation definitions); all of Section 4 (principles, including 4.4 software life
  cycle, 4.7 validation after a change, 4.9 independence of review); 5.1 (life cycle
  activities); 5.2.6 (user site testing) and 5.2.7 (maintenance and software changes).
  Extracted verbatim from the PDF text layer; page headers/footers removed; line breaks follow
  the PDF.

---

On February 2, 2024, FDA published the final rule to amend the Quality System (QS) regulation
in 21 CFR part 820 (89 FR 7496, effective February 2, 2026). The revised 21 CFR part 820 is
now titled the Quality Management System Regulation (QMSR). The QMSR harmonizes quality
management system requirements by incorporating by reference the international standard
specific for medical device quality management systems set by the International Organization for
Standardization (ISO), ISO 13485:2016. The FDA has determined that the requirements in ISO
13485 are, when taken in totality, substantially similar to the requirements of the QS regulation,
providing a similar level of assurance in a firm’s quality management system and ability to
consistently manufacture devices that are safe and effective and otherwise in compliance with the
Federal Food, Drug, and Cosmetic Act (FD&C Act).

This guidance document was issued prior to the effective date of the final rule. FDA encourages
manufacturers to review the current QMSR to ensure compliance with the relevant regulatory
requirements.

On September 24, 2025, FDA issued the “Computer Software Assurance for Production and
Quality System Software” guidance. The “Computer Software Assurance for Production and
Quality System Software” guidance supersedes Section 6: Validation of Automated Process
Equipment and Quality System Software of this guidance. The remaining sections of this
“General Principles of Software Validation” guidance continue to reflect FDA’s current thinking
on this topic. The “Computer Software Assurance for Production and Quality System Software”
guidance is available here: https://www.fda.gov/regulatory­information/search­fda­guidance­
documents/computer­software­assurance­production­and­quality­management­system­software.

[...]

3.1.1 Requirements and Specifications

While the Quality System regulation states that design input requirements must be documented, and that
specified requirements must be verified, the regulation does not further clarify the distinction between the
terms “requirement” and “specification.” A requirement can be any need or expectation for a system
or for its software. Requirements reflect the stated or implied needs of the customer, and may be
market-based, contractual, or statutory, as well as an organization's internal requirements. There can be
many different kinds of requirements (e.g., design, functional, implementation, interface, performance, or
physical requirements). Software requirements are typically derived from the system requirements for
those aspects of system functionality that have been allocated to software. Software requirements are
typically stated in functional terms and are defined, refined, and updated as a development project
progresses. Success in accurately and completely documenting software requirements is a crucial factor
in successful validation of the resulting software.


Guidance for Industry and FDA Staff                             General Principles of Software Validation



A specification is defined as “a document that states requirements.” (See 21 CFR §820.3(y).) It may
refer to or include drawings, patterns, or other relevant documents and usually indicates the means and
the criteria whereby conformity with the requirement can be checked. There are many different kinds of
written specifications, e.g., system requirements specification, software requirements specification,
software design specification, software test specification, software integration specification, etc. All of
these documents establish “specified requirements” and are design outputs for which various forms of
verification are necessary.


3.1.2 Verification and Validation

The Quality System regulation is harmonized with ISO 8402:1994, which treats “verification” and
“validation” as separate and distinct terms. On the other hand, many software engineering journal
articles and textbooks use the terms "verification" and "validation" interchangeably, or in some cases
refer to software "verification, validation, and testing (VV&T)" as if it is a single concept, with no
distinction among the three terms.

Software verification provides objective evidence that the design outputs of a particular phase of the
software development life cycle meet all of the specified requirements for that phase. Software
verification looks for consistency, completeness, and correctness of the software and its supporting
documentation, as it is being developed, and provides support for a subsequent conclusion that software
is validated. Software testing is one of many verification activities intended to confirm that software
development output meets its input requirements. Other verification activities include various static and
dynamic analyses, code and document inspections, walkthroughs, and other techniques.

Software validation is a part of the design validation for a finished device, but is not separately defined
in the Quality System regulation. For purposes of this guidance, FDA considers software validation to
be “confirmation by examination and provision of objective evidence that software
specifications conform to user needs and intended uses, and that the particular requirements
implemented through software can be consistently fulfilled.” In practice, software validation
activities may occur both during, as well as at the end of the software development life cycle to ensure
that all requirements have been fulfilled. Since software is usually part of a larger hardware system, the
validation of software typically includes evidence that all software requirements have been implemented
correctly and completely and are traceable to system requirements. A conclusion that software is
validated is highly dependent upon comprehensive software testing, inspections, analyses, and other
verification tasks performed at each stage of the software development life cycle. Testing of device
software functionality in a simulated use environment, and user site testing are typically included as
components of an overall design validation program for a software automated device.

Software verification and validation are difficult because a developer cannot test forever, and it is hard
to know how much evidence is enough. In large measure, software validation is a matter of developing
a “level of confidence” that the device meets all requirements and user expectations for the software
automated functions and features of the device. Measures such as defects found in specifications
documents, estimates of defects remaining, testing coverage, and other techniques are all used to


Guidance for Industry and FDA Staff                            General Principles of Software Validation


develop an acceptable level of confidence before shipping the product. The level of confidence, and
therefore the level of software validation, verification, and testing effort needed, will vary depending
upon the safety risk (hazard) posed by the automated functions of the device. Additional guidance
regarding safety risk management for software may be found in Section 4 of FDA’s Guidance for the
Content of Pre-market Submissions for Software Contained in Medical Devices, and in the
international standards ISO/IEC 14971-1 and IEC 60601-1-4 referenced in Appendix A.





[...]




Guidance for Industry and FDA Staff                               General Principles of Software Validation




SECTION 4. PRINCIPLES OF SOFTWARE VALIDATION
This section lists the general principles that should be considered for the validation of software.


4.1. REQUIREMENTS

A documented software requirements specification provides a baseline for both validation and
verification. The software validation process cannot be completed without an established software
requirements specification (Ref: 21 CFR 820.3(z) and (aa) and 820.30(f) and (g)).


4.2. DEFECT PREVENTION

Software quality assurance needs to focus on preventing the introduction of defects into the software
development process and not on trying to “test quality into” the software code after it is written.
Software testing is very limited in its ability to surface all latent defects in software code. For example,
the complexity of most software prevents it from being exhaustively tested. Software testing is a
necessary activity. However, in most cases software testing by itself is not sufficient to
establish confidence that the software is fit for its intended use. In order to establish that
confidence, software developers should use a mixture of methods and techniques to prevent software
errors and to detect software errors that do occur. The “best mix” of methods depends on many
factors including the development environment, application, size of project, language, and risk.


4.3. TIME AND EFFORT

To build a case that the software is validated requires time and effort. Preparation for software
validation should begin early, i.e., during design and development planning and design input. The final
conclusion that the software is validated should be based on evidence collected from planned efforts
conducted throughout the software lifecycle.


4.4. SOFTWARE LIFE CYCLE

Software validation takes place within the environment of an established software life cycle. The
software life cycle contains software engineering tasks and documentation necessary to support the
software validation effort. In addition, the software life cycle contains specific verification and validation
tasks that are appropriate for the intended use of the software. This guidance does not recommend any
particular life cycle models – only that they should be selected and used for a software development
project.




Guidance for Industry and FDA Staff                            General Principles of Software Validation


4.5. PLANS

The software validation process is defined and controlled through the use of a plan. The software
validation plan defines “what” is to be accomplished through the software validation effort. Software
validation plans are a significant quality system tool. Software validation plans specify areas such as
scope, approach, resources, schedules and the types and extent of activities, tasks, and work items.


4.6. PROCEDURES

The software validation process is executed through the use of procedures. These procedures establish
“how” to conduct the software validation effort. The procedures should identify the specific actions or
sequence of actions that must be taken to complete individual validation activities, tasks, and work
items.


4.7. SOFTWARE VALIDATION AFTER A CHANGE

Due to the complexity of software, a seemingly small local change may have a significant global system
impact. When any change (even a small change) is made to the software, the validation status of the
software needs to be re-established. Whenever software is changed, a validation analysis should
be conducted not just for validation of the individual change, but also to determine the extent
and impact of that change on the entire software system. Based on this analysis, the software
developer should then conduct an appropriate level of software regression testing to show that
unchanged but vulnerable portions of the system have not been adversely affected. Design controls and
appropriate regression testing provide the confidence that the software is validated after a software
change.


4.8. VALIDATION COVERAGE

Validation coverage should be based on the software’s complexity and safety risk – not on firm size or
resource constraints. The selection of validation activities, tasks, and work items should be
commensurate with the complexity of the software design and the risk associated with the use of the
software for the specified intended use. For lower risk devices, only baseline validation activities may
be conducted. As the risk increases additional validation activities should be added to cover the
additional risk. Validation documentation should be sufficient to demonstrate that all software validation
plans and procedures have been completed successfully.


4.9. INDEPENDENCE OF REVIEW

Validation activities should be conducted using the basic quality assurance precept of “independence of
review.” Self-validation is extremely difficult. When possible, an independent evaluation is always
better, especially for higher risk applications. Some firms contract out for a third-party independent


Guidance for Industry and FDA Staff                             General Principles of Software Validation


verification and validation, but this solution may not always be feasible. Another approach is to assign
internal staff members that are not involved in a particular design or its implementation, but who have
sufficient knowledge to evaluate the project and conduct the verification and validation activities. Smaller
firms may need to be creative in how tasks are organized and assigned in order to maintain internal
independence of review.


4.10. FLEXIBILITY AND RESPONSIBILITY

Specific implementation of these software validation principles may be quite different from one
application to another. The device manufacturer has flexibility in choosing how to apply these validation
principles, but retains ultimate responsibility for demonstrating that the software has been validated.

Software is designed, developed, validated, and regulated in a wide spectrum of environments, and for
a wide variety of devices with varying levels of risk. FDA regulated medical device applications include
software that:

    •   Is a component, part, or accessory of a medical device;
    •   Is itself a medical device; or
    •   Is used in manufacturing, design and development, or other parts of the quality system.

In each environment, software components from many sources may be used to create the application
(e.g., in-house developed software, off-the-shelf software, contract software, shareware). In addition,
software components come in many different forms (e.g., application software, operating systems,
compilers, debuggers, configuration management tools, and many more). The validation of software in
these environments can be a complex undertaking; therefore, it is appropriate that all of these software
validation principles be considered when designing the software validation process. The resultant
software validation process should be commensurate with the safety risk associated with the system,
device, or process.

Software validation activities and tasks may be dispersed, occurring at different locations and being
conducted by different organizations. However, regardless of the distribution of tasks, contractual
relations, source of components, or the development environment, the device manufacturer or
specification developer retains ultimate responsibility for ensuring that the software is validated.




Guidance for Industry and FDA Staff                             General Principles of Software Validation




                 SECTION 5. ACTIVITIES AND TASKS
Software validation is accomplished through a series of activities and tasks that are planned and
executed at various stages of the software development life cycle. These tasks may be one time
occurrences or may be iterated many times, depending on the life cycle model used and the scope of
changes made as the software project progresses.

5.1. SOFTWARE LIFE CYCLE ACTIVITIES

This guidance does not recommend the use of any specific software life cycle model. Software
developers should establish a software life cycle model that is appropriate for their product and
organization. The software life cycle model that is selected should cover the software from its birth to its
retirement. Activities in a typical software life cycle model include the following:

    •   Quality Planning
    •   System Requirements Definition
    •   Detailed Software Requirements Specification
    •   Software Design Specification
    •   Construction or Coding
    •   Testing
    •   Installation
    •   Operation and Support
    •   Maintenance
    •   Retirement

Verification, testing, and other tasks that support software validation occur during each of these
activities. A life cycle model organizes these software development activities in various ways and
provides a framework for monitoring and controlling the software development project. Several
software life cycle models (e.g., waterfall, spiral, rapid prototyping, incremental development, etc.) are
defined in FDA’s Glossary of Computerized System and Software Development Terminology,
dated August 1995. These and many other life cycle models are described in various references listed
in Appendix A.


5.2. TYPICAL TASKS SUPPORTING VALIDATION

For each of the software life cycle activities, there are certain “typical” tasks that support a conclusion
that the software is validated. However, the specific tasks to be performed, their order of performance,
and the iteration and timing of their performance will be dictated by the specific software life cycle
model that is selected and the safety risk associated with the software application. For very low risk
applications, certain tasks may not be needed at all. However, the software developer should at least
consider each of these tasks and should define and document which tasks are or are not appropriate for



Guidance for Industry and FDA Staff                               General Principles of Software Validation


their specific application. The following discussion is generic and is not intended to prescribe any
particular software life cycle model or any particular order in which tasks are to be performed.



[...]

5.2.6. User Site Testing

Testing at the user site is an essential part of software validation. The Quality System regulation requires
installation and inspection procedures (including testing where appropriate) as well as documentation of
inspection and testing to demonstrate proper installation. (See 21 CFR §820.170.) Likewise,
manufacturing equipment must meet specified requirements, and automated systems must be validated
for their intended use. (See 21 CFR §820.70(g) and 21 CFR §820.70(i) respectively.)

Terminology regarding user site testing can be confusing. Terms such as beta test, site validation, user
acceptance test, installation verification, and installation testing have all been used to describe user site
testing. For purposes of this guidance, the term “user site testing” encompasses all of these and any
other testing that takes place outside of the developer’s controlled environment. This testing should take
place at a user's site with the actual hardware and software that will be part of the installed system
configuration. The testing is accomplished through either actual or simulated use of the software being
tested within the context in which it is intended to function.

Guidance contained here is general in nature and is applicable to any user site testing. However, in
some areas (e.g., blood establishment systems) there may be specific site validation issues that need to
be considered in the planning of user site testing. Test planners should check with the FDA Center(s)
with the corresponding product jurisdiction to determine whether there are any additional regulatory
requirements for user site testing.

User site testing should follow a pre-defined written plan with a formal summary of testing and a record
of formal acceptance. Documented evidence of all testing procedures, test input data, and test results
should be retained.

There should be evidence that hardware and software are installed and configured as specified.
Measures should ensure that all system components are exercised during the testing and that the
versions of these components are those specified. The testing plan should specify testing throughout the
full range of operating conditions and should specify continuation for a sufficient time to allow the system
to encounter a wide spectrum of conditions and events in an effort to detect any latent faults that are not
apparent during more normal activities.

Some of the evaluations that have been performed earlier by the software developer at the developer's
site should be repeated at the site of actual use. These may include tests for a high volume of data,
heavy loads or stresses, security, fault testing (avoidance, detection, tolerance, and recovery), error
messages, and implementation of safety requirements. The developer may be able to furnish the user
with some of the test data sets to be used for this purpose.

In addition to an evaluation of the system's ability to properly perform its intended functions, there
should be an evaluation of the ability of the users of the system to understand and correctly interface
with it. Operators should be able to perform the intended functions and respond in an appropriate and
timely manner to all alarms, warnings, and error messages.


Guidance for Industry and FDA Staff                             General Principles of Software Validation



During user site testing, records should be maintained of both proper system performance and any
system failures that are encountered. The revision of the system to compensate for faults detected
during this user site testing should follow the same procedures and controls as for any other software
change.

The developers of the software may or may not be involved in the user site testing. If the developers
are involved, they may seamlessly carry over to the user's site the last portions of design-level systems
testing. If the developers are not involved, it is all the more important that the user have persons who
understand the importance of careful test planning, the definition of expected test results, and the
recording of all test outputs.

Typical Tasks – User Site Testing

•   Acceptance Test Execution
•   Test Results Evaluation
•   Error Evaluation/Resolution
•   Final Test Report



5.2.7. Maintenance and Software Changes

As applied to software, the term maintenance does not mean the same as when applied to hardware.
The operational maintenance of hardware and software are different because their failure/error
mechanisms are different. Hardware maintenance typically includes preventive hardware maintenance
actions, component replacement, and corrective changes. Software maintenance includes corrective,
perfective, and adaptive maintenance but does not include preventive maintenance actions or software
component replacement.

Changes made to correct errors and faults in the software are corrective maintenance. Changes made
to the software to improve the performance, maintainability, or other attributes of the software system
are perfective maintenance. Software changes to make the software system usable in a changed
environment are adaptive maintenance.

When changes are made to a software system, either during initial development or during post release
maintenance, sufficient regression analysis and testing should be conducted to demonstrate that portions
of the software not involved in the change were not adversely impacted. This is in addition to testing
that evaluates the correctness of the implemented change(s).

The specific validation effort necessary for each software change is determined by the type of change,
the development products affected, and the impact of those products on the operation of the software.
Careful and complete documentation of the design structure and interrelationships of various modules,
interfaces, etc., can limit the validation effort needed when a change is made. The level of effort needed


Guidance for Industry and FDA Staff                              General Principles of Software Validation


to fully validate a change is also dependent upon the degree to which validation of the original software
was documented and archived. For example, test documentation, test cases, and results of previous
verification and validation testing need to be archived if they are to be available for performing
subsequent regression testing. Failure to archive this information for later use can significantly increase
the level of effort and expense of revalidating the software after a change is made.

In addition to software verification and validation tasks that are part of the standard software
development process, the following additional maintenance tasks should be addressed:

    •   Software Validation Plan Revision - For software that was previously validated, the existing
        software validation plan should be revised to support the validation of the revised software. If
        no previous software validation plan exists, such a plan should be established to support the
        validation of the revised software.

    •   Anomaly Evaluation – Software organizations frequently maintain documentation, such as
        software problem reports that describe software anomalies discovered and the specific
        corrective action taken to fix each anomaly. Too often, however, mistakes are repeated
        because software developers do not take the next step to determine the root causes of
        problems and make the process and procedural changes needed to avoid recurrence of the
        problem. Software anomalies should be evaluated in terms of their severity and their effects on
        system operation and safety, but they should also be treated as symptoms of process
        deficiencies in the quality system. A root cause analysis of anomalies can identify specific quality
        system deficiencies. Where trends are identified (e.g., recurrence of similar software
        anomalies), appropriate corrective and preventive actions must be implemented and
        documented to avoid further recurrence of similar quality problems. (See 21 CFR 820.100.)

    •   Problem Identification and Resolution Tracking - All problems discovered during
        maintenance of the software should be documented. The resolution of each problem should be
        tracked to ensure it is fixed, for historical reference, and for trending.

    •   Proposed Change Assessment - All proposed modifications, enhancements, or additions
        should be assessed to determine the effect each change would have on the system. This
        information should determine the extent to which verification and/or validation tasks need to be
        iterated.

    •   Task Iteration - For approved software changes, all necessary verification and validation
        tasks should be performed to ensure that planned changes are implemented correctly, all
        documentation is complete and up to date, and no unacceptable changes have occurred in
        software performance.

    •   Documentation Updating – Documentation should be carefully reviewed to determine which
        documents have been impacted by a change. All approved documents (e.g., specifications, test
        procedures, user manuals, etc.) that have been affected should be updated in accordance with
        configuration management procedures. Specifications should be updated before any
        maintenance and software changes are made.


Guidance for Industry and FDA Staff                           General Principles of Software Validation
