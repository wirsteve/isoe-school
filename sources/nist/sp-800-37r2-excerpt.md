# NIST SP 800-37 Revision 2 — "Risk Management Framework for Information Systems and
Organizations: A System Life Cycle Approach for Security and Privacy"

Source: NIST (National Institute of Standards and Technology) Special Publication 800-37,
Revision 2, December 2018 (final). U.S. government work — public domain, free to quote
verbatim (unlike AABB Standards, ISO 31000, or ISO 19011, all of which stay paraphrase-only
in this curriculum).
URL: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-37r2.pdf
DOI: https://doi.org/10.6028/NIST.SP.800-37r2
Retrieved: 2026-10-09 (direct PDF download, verbatim text extraction via `pypdf`).

EXCERPT ONLY — this is a 183-page document. What's extracted below is the subset relevant to
this curriculum's `grc-frameworks-and-risk-management` course: the seven RMF steps and their
purpose statements, the Categorize/Select/Implement/Assess/Authorize/Monitor one-line actions,
the authorization-to-operate and plan-of-action-and-milestones (POA&M) concepts. It omits the
full task-by-task implementation detail (inputs/outputs/responsible-role tables for every one
of dozens of tasks), the national-security-system-specific material, and the appendices
(control catalogs live in the separate SP 800-53, not this document).

---

## The seven RMF steps (current, Rev 2 — Prepare was added in Rev 2; Rev 1 and earlier
public materials describe a six-step cycle without it)

From the document's own table of contents (Chapter Three section numbers): 3.1 Prepare,
3.2 Categorize, 3.3 Select, 3.4 Implement, 3.5 Assess, 3.6 Authorize, 3.7 Monitor.

Figure 2's own framing, and the text introducing it (Chapter Two, page 9), quoted verbatim:

> Select an initial set of controls for the system and tailor the controls as needed to reduce
> risk to an acceptable level based on an assessment of risk.
> Implement the controls and describe how the controls are employed within the system and
> its environment of operation.
> Assess the controls to determine if the controls are implemented correctly, operating as
> intended, and producing the desired outcomes with respect to satisfying the security and
> privacy requirements.
> Authorize the system or common controls based on a determination that the risk to
> organizational operations and assets, individuals, other organizations, and the Nation is
> acceptable.
> Monitor the system and the associated controls on an ongoing basis to include assessing
> control effectiveness, documenting changes to the system and environment of operation,
> conducting risk assessments and impact analyses, and reporting the security and privacy
> posture of the system.

Immediately following, on sequencing (quoted verbatim):

> While the RMF steps are listed in sequential order above and in Chapter Three, the steps
> following the Prepare step can be carried out in a nonsequential order.

The Categorize step's own purpose statement (Chapter Three, 3.2), quoted verbatim:

> The purpose of the Categorize step is to inform organizational risk management processes and
> tasks by determining the adverse impact to organizational operations and assets, individuals,
> other organizations, and the Nation with respect to the loss of confidentiality, integrity, and
> availability of organizational systems and the information processed, stored, and transmitted by
> those systems.

The Prepare step's own purpose statement (Chapter Three, 3.1), quoted verbatim:

> The purpose of the Prepare step is to carry out essential activities at the organization,
> mission and business process, and information system levels of the organization to
> help prepare the organization to manage its security and privacy risks using the Risk
> Management Framework.

## Control families (SP 800-53, named only — not independently sourced in this excerpt)

This document repeatedly references control families as belonging to a *separate* publication,
e.g. (quoted verbatim, Section 3.3-adjacent discussion of common controls):

> Common controls can include controls from any [SP 800-53] control family, for example, physical and
> environmental protection controls, system boundary and monitoring controls, personnel security
> controls, policies and procedures, acquisition controls, account and identity management controls, audit...

This curriculum does NOT independently fetch or quote SP 800-53 itself — only names "control
families" as a concept this document itself points to, consistent with not inventing a citation
to a document not actually read.

## Authorization to operate (ATO)

Glossary definition (Appendix B), attributed in the source itself to [OMB Circular A-130],
quoted verbatim:

> The official management decision given by a senior Federal official or officials to authorize
> operation of an information system and to explicitly accept the risk to agency operations
> (including mission, functions, image, or reputation), agency assets, individuals, other
> organizations, and the Nation based on the implementation of an agreed-upon set of security and
> privacy controls. Authorization also applies to common controls inherited by agency information
> systems.

Related body text (Chapter Three, Authorize step discussion), quoted verbatim:

> If the authorizing official, after reviewing the authorization package, determines that the risk to
> organizational operations, organizational assets, individuals, other organizations, and the Nation
> is acceptable, an authorization to operate is issued for the information system. The system is
> authorized to operate for a specified period in accordance with the terms and conditions
> established by the authorizing official. An authorization termination date is established by the
> authorizing official...

## Plan of Action and Milestones (POA&M)

Task A-6 discussion (Chapter Three, Authorize step), quoted verbatim (this is the fullest,
most load-bearing POA&M passage in the document):

> The plan of action and milestones is included as part of the authorization package. The plan
> of action and milestones describes the actions that are planned to correct deficiencies in the
> controls identified during the assessment of the controls and during continuous monitoring. The
> plan of action and milestones includes tasks to be accomplished with a recommendation for
> completion before or after system authorization; resources required to accomplish the tasks;
> milestones established to meet the tasks; and the scheduled completion dates for the milestones
> and tasks. The plan of action and milestones is reviewed by the authorizing official to ensure
> there is agreement with the remediation actions planned to correct the identified deficiencies.
> It is subsequently used to monitor progress in completing the actions. Deficiencies are accepted
> by the authorizing official as residual risk or are remediated during the assessment or prior to
> submission of the authorization package to the authorizing official. Plan of action and milestones
> entries are not necessary when deficiencies are accepted by the authorizing official as residual
> risk.

## Methodological note for whoever drafts a module from this excerpt

- "Authorization to operate" and "authorization to use" are distinct terms in this document
  (the latter applies when an organization accepts another organization's existing authorization
  package — relevant for cloud/shared systems). Don't conflate them without checking which one
  actually applies to the scenario being built.
- The document itself says RMF is normally applied by a "senior Federal official" / "agency" —
  it is written for U.S. federal information systems. This curriculum borrows its *structure*
  (categorize→select→implement→assess→authorize→monitor, POA&Ms) as a blueprint, the same way
  it borrows ISC2's CGRC/ISO 27001/SOC 2 structure elsewhere — it is never federal law binding
  on Lakeshore, a private blood establishment, and no module should imply otherwise. Name this
  honestly in the lesson that introduces RMF.
- Control families are SP 800-53's own catalog, not reproduced here — name the concept
  ("control families," with 1-2 real example family names drawn from the verbatim passage above:
  physical and environmental protection, personnel security, account and identity management,
  audit) without inventing a specific control number or asserting detail beyond what's quoted here.
