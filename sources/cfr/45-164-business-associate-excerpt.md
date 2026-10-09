# 45 CFR 164.314(a) and 164.504(e) — Business Associate Contract Requirements (full relevant clauses)

Source: Title 45, Code of Federal Regulations, Part 164. 164.314(a) sits in Subpart C (Security
Rule, "Organizational requirements"); 164.504(e) sits in Subpart E (Privacy Rule, within
"Uses and disclosures: organizational requirements"). Together these are the actual textual
basis for what a HIPAA Business Associate Agreement (BAA) has to contain.
URLs:
- https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-C/section-164.314
- https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.504
Retrieved: 2026-10-09 (eCFR Versioner API, full-Part-164 XML, as of 2026-10-07; while scoping
`vendor-and-third-party-risk-management`).

EXCERPT — 164.314(a) quoted in full; 164.504(e) excerpted to its own business-associate-contract
clauses, (e)(1)-(2) (164.504's other paragraphs, on group health plans and hybrid entities, are
not relevant to a vendor-risk course and are not saved).

---

## 164.314(a) — Organizational requirements: business associate contracts (Security Rule side)

> (a)(1) Standard: Business associate contracts or other arrangements. The contract or other
> arrangement required by § 164.308(b)(3) must meet the requirements of paragraph (a)(2)(i),
> (a)(2)(ii), or (a)(2)(iii) of this section, as applicable.
> (2) Implementation specifications (Required)—(i) Business associate contracts. The contract
> must provide that the business associate will—
> (A) Comply with the applicable requirements of this subpart;
> (B) In accordance with § 164.308(b)(2), ensure that any subcontractors that create, receive,
> maintain, or transmit electronic protected health information on behalf of the business
> associate agree to comply with the applicable requirements of this subpart by entering into a
> contract or other arrangement that complies with this section; and
> (C) Report to the covered entity any security incident of which it becomes aware, including
> breaches of unsecured protected health information as required by § 164.410.
> (ii) Other arrangements. The covered entity is in compliance with paragraph (a)(1) of this
> section if it has another arrangement in place that meets the requirements of § 164.504(e)(3).
> (iii) Business associate contracts with subcontractors. The requirements of paragraphs (a)(2)(i)
> and (a)(2)(ii) of this section apply to the contract or other arrangement between a business
> associate and a subcontractor required by § 164.308(b)(4) in the same manner as such
> requirements apply to contracts or other arrangements between a covered entity and business
> associate.

**Methodological note:** (a)(2)(i)(C) is the textual basis for a vendor's own security-incident
and breach-reporting obligation TO the covered entity — a real, binding contract term, not a
courtesy. This is the clause a "vendor change notification" discussion should anchor to: a BAA
doesn't just require safeguards, it requires the vendor to tell Lakeshore when something goes
wrong, in writing, as a matter of contract.

## 164.504(e)(1)-(2) — Business associate contracts (Privacy Rule side, the fuller contract-terms list)

> (e)(1) Standard: Business associate contracts. (i) The contract or other arrangement required
> by § 164.502(e)(2) must meet the requirements of paragraph (e)(2), (e)(3), or (e)(5) of this
> section, as applicable.
> (ii) A covered entity is not in compliance with the standards in § 164.502(e) and this
> paragraph, if the covered entity knew of a pattern of activity or practice of the business
> associate that constituted a material breach or violation of the business associate's
> obligation under the contract or other arrangement, unless the covered entity took reasonable
> steps to cure the breach or end the violation, as applicable, and, if such steps were
> unsuccessful, terminated the contract or arrangement, if feasible.
> (iii) A business associate is not in compliance with the standards in § 164.502(e) and this
> paragraph, if the business associate knew of a pattern of activity or practice of a
> subcontractor that constituted a material breach or violation of the subcontractor's obligation
> under the contract or other arrangement, unless the business associate took reasonable steps to
> cure the breach or end the violation, as applicable, and, if such steps were unsuccessful,
> terminated the contract or arrangement, if feasible.
> (2) Implementation specifications: Business associate contracts. A contract between the covered
> entity and a business associate must:
> (i) Establish the permitted and required uses and disclosures of protected health information
> by the business associate. The contract may not authorize the business associate to use or
> further disclose the information in a manner that would violate the requirements of this
> subpart, if done by the covered entity, except that:
> (A) The contract may permit the business associate to use and disclose protected health
> information for the proper management and administration of the business associate, as
> provided in paragraph (e)(4) of this section; and
> (B) The contract may permit the business associate to provide data aggregation services
> relating to the health care operations of the covered entity.
> (ii) Provide that the business associate will:
> (A) Not use or further disclose the information other than as permitted or required by the
> contract or as required by law;
> (B) Use appropriate safeguards and comply, where applicable, with subpart C of this part with
> respect to electronic protected health information, to prevent use or disclosure of the
> information other than as provided for by its contract;
> (C) Report to the covered entity any use or disclosure of the information not provided for by
> its contract of which it becomes aware, including breaches of unsecured protected health
> information as required by § 164.410;
> (D) In accordance with § 164.502(e)(1)(ii), ensure that any subcontractors that create, receive,
> maintain, or transmit protected health information on behalf of the business associate agree to
> the same restrictions and conditions that apply to the business associate with respect to such
> information;
> (E) Make available protected health information in accordance with § 164.524;
> (F) Make available protected health information for amendment and incorporate any amendments to
> protected health information in accordance with § 164.526;
> (G) Make available the information required to provide an accounting of disclosures in
> accordance with § 164.528;
> (H) To the extent the business associate is to carry out a covered entity's obligation under
> this subpart, comply with the requirements of this subpart that apply to the covered entity in
> the performance of such obligation.
> (I) Make its internal practices, books, and records relating to the use and disclosure of
> protected health information received from, or created or received by the business associate on
> behalf of, the covered entity available to the Secretary for purposes of determining the covered
> entity's compliance with this subpart; and
> (J) At termination of the contract, if feasible, return or destroy all protected health
> information received from, or created or received by the business associate on behalf of, the
> covered entity that the business associate still maintains in any form and retain no copies of
> such information or, if such return or destruction is not feasible, extend the protections of
> the contract to the information and limit further uses and disclosures to those purposes that
> make the return or destruction of the information infeasible.
> (iii) Authorize termination of the contract by the covered entity, if the covered entity
> determines that the business associate has violated a material term of the contract.

**Methodological note:** this is the real checklist of what a BAA has to contain — not an
exhaustive list of every clause a real-world BAA carries (indemnification, liability caps, and
other commercial terms are negotiated separately and aren't HIPAA requirements), but every
HIPAA-mandated provision. A module teaching "what does a BAA obligate you to do" should walk
(2)(ii)(A)-(J) directly rather than describing a BAA generically. 164.410, referenced repeatedly
in both excerpts above as the breach-notification-to-covered-entity trigger for a business
associate, was not independently fetched this session — name only that it exists (the
business-associate-side mirror of 164.404's own notification duty) without quoting or
paraphrasing its specific mechanics.

## Not saved — don't assert beyond this excerpt

- 164.308(b) (the Security Rule's own cross-referenced business-associate-contract trigger,
  164.314(a)(1) points to it) — not independently fetched.
- 164.410 (notification by a business associate to the covered entity) — named only, not quoted.
- 164.502(e) (the Privacy Rule's own general business-associate-disclosure standard, which
  164.504(e) implements) — not independently fetched; 164.504(e) itself is detailed enough to
  teach the actual contract-terms checklist without it.
