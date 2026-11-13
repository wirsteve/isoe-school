# NIST SP 800-218, Secure Software Development Framework (SSDF) Version 1.1 — EXCERPT

Source: NIST Special Publication 800-218, *Secure Software Development Framework (SSDF) Version
1.1: Recommendations for Mitigating the Risk of Software Vulnerabilities*, February 2022.
PDF URL: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf
Publication page: https://csrc.nist.gov/pubs/sp/800/218/final
Retrieved: 2026-11-13. U.S. government work — public domain, safe to quote verbatim.
Tier: voluntary federal framework (not a regulation; not FDA). Useful as vocabulary for a secure
SDLC and for what to ask a software vendor about its development practices.

Excerpt only: the Abstract (opening) and each practice's name, identifier, and one-line purpose
statement as printed in Table 1, in order. Tasks, implementation examples, and references
omitted. Extracted from the PDF text layer; table cells flattened into prose, so verify exact
wording against the PDF before quoting a long passage. (PW.3 and PW.6 not captured in this
excerpt — PW.3 was moved in v1.1; PW.6 concerns compiler/build configuration.)

---

## Abstract (opening)

Few software development life cycle (SDLC) models explicitly address software security in detail, so secure software development practices usually need to be added to each SDLC model to ensure that the software being developed is well-secured. This document recommends the Secure Software Development Framework (SSDF) – a core set of high-level secure software development practices that can be integrated into each SDLC implementation. Following such practices should help software producers reduce the number of vulnerabilities in released software, reduce the potential impact of the exploitation of undetected or unaddressed vulnerabilities, and address the root causes of vulnerabilities to prevent future recurrences. Because the framework provides a common vocabulary for secure software development, software acquirers can also use it to foster communications with suppliers in acquisition processes and other management activities. Keywords secure software development; Secure Software Development Framework (SSDF); secure software development practices; software acquisition; software development; software development life cycle (SDLC); software security. [...]

## Prepare the Organization (PO)

- **Define Security Requirements for Software Development (PO.1):** Ensure that security requirements for software development are known at all times so that they can be taken into account throughout the SDLC and duplication of effort can be minimized because the requirements information can be collected once and shared. This includes requirements from [...]
- **Implement Roles and Responsibilities (PO.2):** Ensure that everyone inside and outside of the organization involved in the SDLC is prepared to perform their SDLC-related roles and responsibilities throughout the SDLC.
- **Implement Supporting Toolchains (PO.3):** Use automation to reduce human effort and improve the accuracy, reproducibility, usability, and comprehensiveness of security practices throughout the SDLC, as well as provide a way to document and demonstrate the use of these practices. Toolchains and tools may be used at different levels of the organization, such as [...]
- **Define and Use Criteria for Software Security Checks (PO.4):** Help ensure that the software resulting from the SDLC meets the organization’s expectations by defining and using criteria for checking the software’s security during development.
- **Implement and Maintain Secure Environments for Software Development (PO.5):** Ensure that all components of the environments for software development are strongly protected from internal and external threats to prevent compromises of the environments or the software being developed or maintained within them. Examples of [...]

## Protect the Software (PS)

- **Protect All Forms of Code from Unauthorized Access and Tampering (PS.1):** Help prevent unauthorized changes to code, both inadvertent and intentional, which could circumvent or negate the intended security characteristics of the software. For code that is not intended to be publicly accessible, this helps prevent theft of the software and may make it more difficult or [...]
- **Provide a Mechanism for Verifying Software Release Integrity (PS.2):** Help software acquirers ensure that the software they acquire is legitimate and has not been tampered with.
- **Archive and Protect Each Software Release (PS.3):** Preserve software releases in order to help identify, analyze, and eliminate vulnerabilities discovered in the software after release.

## Produce Well-Secured Software (PW)

- **Design Software to Meet Security Requirements and Mitigate Security Risks (PW.1):** Identify and evaluate the security requirements for the software; determine what security risks the software is likely to face during operation and how the software’s design and architecture should mitigate those risks; and justify any cases where risk-based analysis [...]
- **Review the Software Design to Verify Compliance with Security Requirements and Risk Information (PW.2):** Help ensure that the software will meet the security requirements and satisfactorily address the identified risk information.
- **Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating Functionality (PW.4):** Lower the costs of software development, expedite software development, and decrease the likelihood of introducing additional security vulnerabilities into the software by reusing software modules and services that have already had their security [...]
- **Create Source Code by Adhering to Secure Coding Practices (PW.5):** Decrease the number of security vulnerabilities in the software, and reduce costs by minimizing vulnerabilities introduced during source code creation that meet or exceed organization-defined vulnerability severity criteria.
- **Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements (PW.7):** Help identify vulnerabilities so that they can be corrected before the software is released to prevent exploitation. Using automated methods lowers the effort and resources needed to detect vulnerabilities. Human-readable code [...]
- **Test Executable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements (PW.8):** Help identify vulnerabilities so that they can be corrected before the software is released in order to prevent exploitation. Using automated methods lowers the effort and resources needed to detect vulnerabilities and improves traceability and [...]
- **Configure Software to Have Secure Settings by Default (PW.9):** Help improve the security of the software at the time of installation to reduce the likelihood of the software being deployed with weak security settings, putting it at greater risk of compromise.

## Respond to Vulnerabilities (RV)

- **Identify and Confirm Vulnerabilities on an Ongoing Basis (RV.1):** Help ensure that vulnerabilities are identified more quickly so that they can be remediated more quickly in accordance with risk, reducing the window of opportunity for attackers.
- **Assess, Prioritize, and Remediate Vulnerabilities (RV.2):** Help ensure that vulnerabilities are remediated in accordance with risk to reduce the window of opportunity for attackers.
- **Analyze Vulnerabilities to Identify Their Root Causes (RV.3):** Help reduce the frequency of vulnerabilities in the future.
