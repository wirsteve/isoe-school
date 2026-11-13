# NIST SP 800-53 Rev. 5 — selected control statements (CM-2, CM-3, CM-4, CM-5, SA-10, SA-11, SA-15) — EXCERPT

Source: NIST SP 800-53 Revision 5, *Security and Privacy Controls for Information Systems and
Organizations* (September 2020, includes updates as of 2020-12-10 and later minor releases), via
NIST's official OSCAL catalog (machine-readable form of the same publication).
OSCAL URL: https://raw.githubusercontent.com/usnistgov/oscal-content/main/nist.gov/SP800-53/rev5/json/NIST_SP-800-53_rev5_catalog.json
Publication page: https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final
Retrieved: 2026-11-13. U.S. government work — public domain, safe to quote verbatim.
Tier: federal security control catalog — mandatory for federal systems, **voluntary** for a
private blood center (used here as a well-regarded vocabulary for configuration and change
control, the same way `grc-frameworks-and-risk-management` uses the RMF).
Excerpt only: the base control **statements** (not discussion, enhancements, or related
controls). Parameter placeholders are shown as [Assignment: ...] / [Selection: ...] the way the PDF shows them.

---
## CM-2 Baseline Configuration


  a. Develop, document, and maintain under configuration control, a current baseline configuration of the system; and
  b. Review and update the baseline configuration of the system:
    1. [Assignment: organization-defined frequency];
    2. When required due to [Assignment: organization-defined circumstances] ; and
    3. When system components are installed or upgraded.

## CM-3 Configuration Change Control


  a. Determine and document the types of changes to the system that are configuration-controlled;
  b. Review proposed configuration-controlled changes to the system and approve or disapprove such changes with explicit consideration for security and privacy impact analyses;
  c. Document configuration change decisions associated with the system;
  d. Implement approved configuration-controlled changes to the system;
  e. Retain records of configuration-controlled changes to the system for [Assignment: organization-defined time period];
  f. Monitor and review activities associated with configuration-controlled changes to the system; and
  g. Coordinate and provide oversight for configuration change control activities through [Assignment: organization-defined configuration change control element] that convenes [Selection (one or more): [Assignment: organization-defined frequency]; when [Assignment: organization-defined configuration change conditions]].

## CM-4 Impact Analyses

Analyze changes to the system to determine potential security and privacy impacts prior to change implementation.

## CM-5 Access Restrictions for Change

Define, document, approve, and enforce physical and logical access restrictions associated with changes to the system.

## SA-10 Developer Configuration Management

Require the developer of the system, system component, or system service to:
  a. Perform configuration management during system, component, or service [Selection (one or more): design; development; implementation; operation; disposal];
  b. Document, manage, and control the integrity of changes to [Assignment: organization-defined configuration items];
  c. Implement only organization-approved changes to the system, component, or service;
  d. Document approved changes to the system, component, or service and the potential security and privacy impacts of such changes; and
  e. Track security flaws and flaw resolution within the system, component, or service and report findings to [Assignment: organization-defined personnel].

## SA-11 Developer Testing and Evaluation

Require the developer of the system, system component, or system service, at all post-design stages of the system development life cycle, to:
  a. Develop and implement a plan for ongoing security and privacy control assessments;
  b. Perform [Selection (one or more): unit; integration; system; regression] testing/evaluation [Assignment: organization-defined frequency to conduct] at [Assignment: organization-defined depth and coverage];
  c. Produce evidence of the execution of the assessment plan and the results of the testing and evaluation;
  d. Implement a verifiable flaw remediation process; and
  e. Correct flaws identified during testing and evaluation.

## SA-15 Development Process, Standards, and Tools


  a. Require the developer of the system, system component, or system service to follow a documented development process that:
    1. Explicitly addresses security and privacy requirements;
    2. Identifies the standards and tools used in the development process;
    3. Documents the specific tool options and tool configurations used in the development process; and
    4. Documents, manages, and ensures the integrity of changes to the process and/or tools used in development; and
  b. Review the development process, standards, tools, tool options, and tool configurations [Assignment: organization-defined frequency] to determine if the process, standards, tools, tool options and tool configurations selected and employed can satisfy the following security and privacy requirements: [Assignment: organization-defined security and privacy requirements].
