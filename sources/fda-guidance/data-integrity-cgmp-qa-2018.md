# FDA guidance — Data Integrity and Compliance With Drug CGMP: Questions and Answers (December 2018)

Source: U.S. Food and Drug Administration, Center for Drug Evaluation and Research (CDER), in
cooperation with the Center for Biologics Evaluation and Research (CBER), the Center for
Veterinary Medicine (CVM), and the Office of Regulatory Affairs.
*Data Integrity and Compliance With Drug CGMP — Questions and Answers, Guidance for Industry.*
Final guidance, dated December 2018 on its cover page. Tier: **FDA guidance**
("Contains Nonbinding Recommendations") — not regulation. Its own words: "the use of the word
*should* in Agency guidances means that something is suggested or recommended, but not required."
PDF URL: https://www.fda.gov/media/119267/download
Guidance page: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers
Retrieved: 2026-10-09 (PDF downloaded directly from fda.gov; HTTP 200 this session).

**Scope note for drafters:** this guidance addresses CGMP (current good manufacturing practice)
for drugs under 21 CFR Parts 210, 211, and 212 — not Part 606 (blood) directly. It reaches a
blood establishment's records the same way 211.68 does elsewhere in this curriculum: via
210.2(a)'s supplementation principle (Parts 211 and 600-680 "supplement, not supersede, each
other"), already established and sourced in `csv-and-becs`. Cite it as drug-CGMP guidance that
illustrates data-integrity principles a blood establishment's own records are also subject to via
606/211 supplementation — don't imply it was written for blood establishments specifically.

**Important terminology note:** this guidance defines and uses **"ALCOA"** (attributable,
legible, contemporaneously recorded, original or a true copy, and accurate) — it does **not** use
the term "ALCOA+" anywhere in its text (confirmed by direct search of the extracted PDF text).
"ALCOA+" (commonly adding complete, consistent, enduring, and available) is an industry/
international-regulator extension — associated with bodies like the UK's MHRA and WHO guidance,
not verified from a saved FDA source. Do not attribute "ALCOA+" to FDA. Cite "ALCOA" from this
guidance; name "ALCOA+" only as a broader industry-practice term, without asserting FDA endorses
the "+" additions or quoting a source for them unless one is separately fetched and verified.

Text below is extracted verbatim from the PDF via `pypdf`. Page-footer artifacts ("Contains
Nonbinding Recommendations", page numbers) appear inline as the PDF's own layout produced them.
Nothing has been summarized or edited.

---

Data Integrity and Compliance With Drug CGMP
Questions and Answers
Guidance for Industry

This guidance represents the current thinking of the Food and Drug Administration (FDA or Agency) on
this topic. It does not establish any rights for any person and is not binding on FDA or the public. You can
use an alternative approach if it satisfies the requirements of the applicable statutes and regulations. To
discuss an alternative approach, contact the FDA office responsible for this guidance as listed on the title
page.

I. INTRODUCTION

The purpose of this guidance is to clarify the role of data integrity in current good manufacturing
practice (CGMP) for drugs, as required in 21 CFR parts 210, 211, and 212. Unless otherwise
noted, the term CGMP in this guidance refers to CGMPs for drugs (including biologics). FDA's
authority for CGMP comes from section 501(a)(2)(B) of the Federal Food, Drug, and Cosmetic
Act (FD&C Act). Part 210 covers Current Good Manufacturing Practice in Manufacturing,
Processing, Packing, or Holding of Drugs; General; part 211 covers Current Good
Manufacturing Practice for Finished Pharmaceuticals; and part 212 covers Current Good
Manufacturing Practice for Positron Emission Tomography (PET) Drugs. All citations to parts
211 and 212 in this document pertain to finished pharmaceuticals and PET drugs, but these
requirements are also consistent with Agency guidance on CGMP for active pharmaceutical
ingredients with respect to data integrity. This guidance provides the Agency's current thinking
on the creation and handling of data in accordance with CGMP requirements.

FDA expects that all data be reliable and accurate (see the "Background" section). CGMP
regulations and guidance allow for flexible and risk-based strategies to prevent and detect data
integrity issues. Firms should implement meaningful and effective strategies to manage their data
integrity risks based on their process understanding and knowledge management of technologies
and business models.

Meaningful and effective strategies should consider the design, operation, and monitoring of
systems and controls based on risk to patient, process, and product. Management's involvement
in and influence on these strategies is essential in preventing and correcting conditions that can
lead to data integrity problems. It is the role of management with executive responsibility to
create a quality culture where employees understand that data integrity is an organizational core
value and employees are encouraged to identify and promptly report data integrity issues. In the
absence of management support of a quality culture, quality systems can break down and lead to
CGMP noncompliance.

In general, FDA's guidance documents do not establish legally enforceable responsibilities.
Instead, guidances describe the Agency's current thinking on a topic and should be viewed only
as recommendations, unless specific regulatory or statutory requirements are cited. The use of
the word should in Agency guidances means that something is suggested or recommended, but
not required.

II. BACKGROUND

In recent years, FDA has increasingly observed CGMP violations involving data integrity during
CGMP inspections. This is troubling because ensuring data integrity is an important component
of industry's responsibility to ensure the safety, efficacy, and quality of drugs, and of FDA's
ability to protect the public health. These data integrity-related CGMP violations have led to
numerous regulatory actions, including warning letters, import alerts, and consent decrees. The
underlying premise in §§ 210.1 and 212.2 is that CGMP sets forth minimum requirements to
assure that drugs meet the standards of the FD&C Act regarding safety, identity, strength,
quality, and purity. Requirements with respect to data integrity in parts 211 and 212 include,
among other things:

- § 211.68 (requiring that "backup data are exact and complete" and "secure from
alteration, inadvertent erasures, or loss" and that "output from the computer … be
checked for accuracy").

- § 212.110(b) (requiring that data be "stored to prevent deterioration or loss").

- §§ 211.100 and 211.160 (requiring that certain activities be "documented at the time of
performance" and that laboratory controls be "scientifically sound").

- § 211.180 (requiring that records be retained as "original records," or "true copies," or
other "accurate reproductions of the original records").

- §§ 211.188, 211.194, and 212.60(g) (requiring "complete information," "complete data
derived from all tests," "complete record of all data," and "complete records of all tests
performed").

- §§ 211.22, 211.192, and 211.194(a) (requiring that production and control records be
"reviewed" and that laboratory records be "reviewed for accuracy, completeness, and
compliance with established standards").

- §§ 211.182, 211.186(a), 211.188(b)(11), and 211.194(a)(8) (requiring that records be
"checked," "verified," or "reviewed").

When considering how to meet many of these regulatory requirements, it may be useful to ask
the following questions:

- Are controls in place to ensure that data is complete?
- Are activities documented at the time of performance?
- Are activities attributable to a specific individual?
- Can only authorized individuals make changes to records?
- Is there a record of changes to data?
- Are records reviewed for accuracy, completeness, and compliance with established
standards?
- Are data maintained securely from data creation through disposition after the record's
retention period?

This guidance helps answer these questions and enables an understanding of key concepts behind
the regulatory requirements.

While not in the scope of this guidance, data integrity-related CGMP violations can also impact
or be directly linked to application filing, review, and regulatory actions.

Electronic signature and record-keeping requirements are laid out in 21 CFR part 11 and apply to
certain records subject to records requirements set forth in Agency regulations, including parts
210, 211, and 212. For more information, see guidance for industry Part 11, Electronic Records;
Electronic Signatures— Scope and Application, which outlines FDA's current thinking regarding
the scope and application of part 11 pending FDA's reexamination of part 11 as it applies to all
FDA-regulated products.

III. QUESTIONS AND ANSWERS

1. Please clarify the following terms as they relate to CGMP records:

a. What is "data integrity"?

For the purposes of this guidance, data integrity refers to the completeness, consistency, and
accuracy of data. Complete, consistent, and accurate data should be attributable, legible,
contemporaneously recorded, original or a true copy, and accurate (ALCOA).

Data integrity is critical throughout the CGMP data life cycle, including in the creation,
modification, processing, maintenance, archival, retrieval, transmission, and disposition of data
after the record's retention period ends. System design and controls should enable easy
detection of errors, omissions, and aberrant results throughout the data's life cycle.

[Footnote 5: These characteristics are important to ensuring data integrity and are addressed
throughout the CGMP regulations for drugs. For attributable, see §§ 211.101(d), 211.122,
211.186, 211.188(b)(11), and 212.50(c)(10); for legible, see §§ 211.180(e) and 212.110(b); for
contemporaneously recorded (at the time of performance), see §§ 211.100(b) and 211.160(a); for
original or a true copy, see §§ 211.180 and 211.194(a); and for accurate, see §§ 211.22(a),
211.68, 211.188, and 212.60(g).]

b. What is "metadata"?

Metadata is the contextual information required to understand data. A data value is by itself
meaningless without additional information about the data. Metadata is often described as data
about data. Metadata is structured information that describes, explains, or otherwise makes it
easier to retrieve, use, or manage data. For example, the number "23" is meaningless without
metadata, such as an indication of the unit "mg." Among other things, metadata for a particular
piece of data could include a date/time stamp documenting when the data were acquired, a user
ID of the person who conducted the test or analysis that generated the data, the instrument ID
used to acquire the data, material status data, the material identification number, and audit trails.

Data should be maintained throughout the record's retention period with all associated metadata
required to reconstruct the CGMP activity (e.g., §§ 211.188 and 211.194). The relationships
between data and their metadata should be preserved in a secure and traceable manner.

c. What is an "audit trail"?

For purposes of this guidance, audit trail means a secure, computer-generated, time-stamped
electronic record that allows for reconstruction of the course of events relating to the creation,
modification, or deletion of an electronic record. For example, the audit trail for a high
performance liquid chromatography (HPLC) run should include the user name, date/time of the
run, the integration parameters used, and details of a reprocessing, if any. Documentation should
include change justification for the reprocessing.

Audit trails include those that track creation, modification, or deletion of data (such as processing
parameters and results) and those that track actions at the record or system level (such as
attempts to access the system or rename or delete a file).

CGMP-compliant record-keeping practices prevent data from being lost or obscured and ensure
that activities are documented at the time of performance (see §§ 211.68, 211.100, 211.160(a),
211.188, and 211.194). Electronic record-keeping systems, which include audit trails, can
support these CGMP requirements.

d. How does FDA use the terms "static" and "dynamic" as they relate to record formats?

For the purposes of this guidance, static is used to indicate a fixed-data record such as a paper
record or an electronic image, and dynamic means that the record format allows interaction
between the user and the record content. For example, a dynamic chromatographic record may
allow the user to change the baseline and reprocess chromatographic data so that the resulting
peaks may appear smaller or larger. It also may allow the user to modify formulas or entries in a
spreadsheet used to compute test results or other information such as calculated yield.

e. How does FDA use the term "backup" in § 211.68(b)?

FDA uses the term backup in § 211.68(b) to refer to a true copy of the original record that is
maintained securely throughout the record retention period (e.g., § 211.180). Backup data must
be exact, complete, and secure from alteration, inadvertent erasures, or loss (§ 211.68(b)). The
backup file should contain the data (which includes associated metadata) and should be in the
original format or in a format compatible with the original format.

FDA's use of the term backup is consistent with the term archive as used in guidance for
industry and FDA staff General Principles of Software Validation.

Temporary backup copies (e.g., in case of a computer crash or other interruption) would not
satisfy the requirement in § 211.68(b) to maintain a backup file of data.

f. What are the "systems" in "computer or related systems" in § 211.68?

The American National Standards Institute (ANSI) defines systems as people, machines, and
methods organized to accomplish a set of specific functions. Computer or related systems can
refer to computer hardware, software, peripheral devices, networks, cloud infrastructure,
personnel, and associated documents (e.g., user manuals and standard operating procedures).

2. When is it permissible to invalidate a CGMP result and exclude it from the
determination of batch conformance?

Data created as part of a CGMP record must be evaluated by the quality unit as part of release
criteria (see §§ 211.22 and 212.70) and maintained for CGMP purposes (e.g., § 211.180).
Electronic data generated to fulfill CGMP requirements include relevant metadata required to
reconstruct the CGMP activity captured in the record. Invalidating test results to exclude them
from quality unit decisions about conformance to a specification requires a valid, documented,
scientifically sound justification. See, for example, §§ 211.160(b), 211.188, 211.192, and
212.71(b) and the guidance for industry Investigating Out-of-Specification (OOS) Test Results
for Pharmaceutical Production. Even if test results are legitimately invalidated on the basis of a
scientifically sound investigation, the full CGMP batch record provided to the quality unit would
include the original (invalidated) data, along with the investigation report that justifies
invalidating the result. The requirements for record retention and review do not differ depending
on the data format; paper-based and electronic data record-keeping systems are subject to the
same requirements.

3. Does each CGMP workflow on a computer system need to be validated?

Yes, a CGMP workflow, such as creation of an electronic master production and control record
(MPCR), is an intended use of a computer system to be checked through validation (see
§§ 211.63, 211.68(b), and 211.110(a)). The extent of validation studies should be commensurate
with the risk posed by the automated system. When the same system is used to perform both
CGMP and non-CGMP functions, the potential for non-CGMP functions to affect CGMP
operations should be assessed and mitigated appropriately.

If you validate the computer system but you do not validate it for its intended use, you cannot
know if your workflow runs correctly. For example, qualifying the Manufacturing Execution
System (MES) platform, a computer system, ensures that it meets its relevant requirements and
specifications; however, it does not demonstrate that a given MPCR generated by the MES
contains the correct calculations. In this example, validating the workflow ensures that the
intended steps, requirements, and calculations in the MPCR are accurate and perform properly.
This is similar to reviewing a paper MPCR and ensuring all supporting procedures are in place
before the MPCR is implemented in production (see §§ 211.100, 211.186, and 212.50(b) and the
guidance for industry PET Drugs— Current Good Manufacturing Practice (CGMP)).

FDA recommends you implement appropriate controls to manage risks associated with each
element of the system. Controls that are appropriately designed to validate a system for its
intended use address software, hardware, personnel, and documentation.

4. How should access to CGMP computer systems be restricted?

You must exercise appropriate controls to assure that changes to computerized MPCRs or other
CGMP records or input of laboratory data into computerized records can be made only by
authorized personnel (§ 211.68(b)). Other examples of records for which control should be
restricted to authorized personnel include automated visual inspection records, electronic
materials management system records, and automated dispensing system weighing records. FDA
recommends that you restrict the ability to alter specifications, process parameters, data, or
manufacturing or testing methods by technical means where possible (e.g., by limiting
permissions to change settings or data).

The system administrator role, including any rights to alter files and settings, should be assigned
to personnel independent from those responsible for the record content. To assist in controlling
access, it is important that manufacturers establish and implement a method for documenting
authorized personnel's access privileges for each CGMP computer system in use (e.g., by
maintaining a list of authorized individuals) (see § 211.68(b)).

5. Why is FDA concerned with the use of shared login accounts for computer systems?

When login credentials are shared, a unique individual cannot be identified through the login and
the system would not conform to the CGMP requirements in parts 211 and 212. FDA requires
that system controls, including documentation controls, be designed in accordance with CGMP
to assure product quality (e.g., §§ 211.100 and 212.50). For example, you must implement
documentation controls that ensure that the actions as described in question 4 are attributable to a
specific individual (see §§ 211.68(b), 211.188(b)(11), 211.194(a)(7) and (8), and 212.50(c)(10)).

Shared, read-only user accounts that do not allow the user to modify data or settings are
acceptable for viewing data, but they do not conform with the part 211 and 212 requirements for
actions, such as second person review, to be attributable to a specific individual.

6. How should blank forms be controlled?

There must be document controls in place to assure product quality (see §§ 211.100, 211.160(a),
211.186, 212.20(d), and 212.60(g)). For example, bound paginated notebooks, stamped for
official use by a document control group, provide good document control because they allow
easy detection of unofficial notebooks as well as any gaps in notebook pages. If used, blank
forms (e.g., electronic worksheets, laboratory notebooks, and MPCRs) should be controlled by
the quality unit or by another document control method. As appropriate, numbered sets of blank
forms may be issued and should be reconciled upon completion of all issued forms. Incomplete
or erroneous forms should be kept as part of the permanent record along with written
justification for their replacement (see, e.g., §§ 211.192, 211.194, 212.50(a), and
212.70(f)(1)(vi)). All data required to recreate a CGMP activity should be maintained as part of
the complete record.

7. Who should review audit trails?

Audit trail review is similar to assessing cross-outs on paper when reviewing data. Personnel
responsible for record review under CGMP should review the audit trails that capture changes to
data associated with the record as they review the rest of the record (e.g., §§ 211.22(a),
211.101(c) and (d), 211.103, 211.182, 211.186(a), 211.192, 211.194(a)(8), and 212.20(d)). For
example, all production and control records, which includes audit trails, must be reviewed and
approved by the quality unit (§ 211.192). The regulations provide flexibility to have some
activities reviewed by a person directly supervising or checking information (e.g., § 211.188).
FDA recommends a quality system approach to implementing oversight and review of CGMP
records.

8. How often should audit trails be reviewed?

If the review frequency for the data is specified in CGMP regulations, adhere to that frequency
for the audit trail review. For example, § 211.188(b) requires review after each significant step in
manufacture, processing, packing, or holding, and § 211.22 requires data review before batch
release. In these cases, you would apply the same review frequency for the audit trail.

If the review frequency for the data is not specified in CGMP regulations, you should determine
the review frequency for the audit trail using knowledge of your processes and risk assessment
tools. The risk assessment should include evaluation of data criticality, control mechanisms, and
impact on product quality.

[Footnote 13: Risks to data include, but are not limited to, the potential to be deleted, amended,
or excluded without authorization or without detection. Examples of audit trails that may be
appropriate to review on a risk-based frequency include audit trails that capture instrument
operational status, instrument communication logs, and alert records.]

Your approach to audit trail review and the frequency with which you conduct it should ensure
that CGMP requirements are met, appropriate controls are implemented, and the reliability of the
review is proven.

See the audit trail definition in 1.c. above for further information on audit trails.

9. Can electronic copies be used as accurate reproductions of paper or electronic
records?

Yes. Electronic copies can be used as true copies of paper or electronic records, provided the
copies preserve the content and meaning of the original record, which includes all metadata
required to reconstruct the CGMP activity and the static or dynamic nature of the original
records.

True copies of dynamic electronic records may be made and maintained in the format of the
original records or in a format that allows for the content and meaning of the original records to
be preserved if a suitable reader and copying equipment (e.g., software and hardware, including
media readers) are readily available (§§ 211.180(d) and 212.110).

10. Is it acceptable to retain paper printouts or static records instead of original
electronic records from stand-alone computerized laboratory instruments, such as
an FT-IR instrument?

A paper printout or static record may satisfy retention requirements if it is the original record or a
true copy of the original record (see §§ 211.68(b), 211.188, 211.194, and 212.60). During data
acquisition, for example, pH meters and balances may create a paper printout or static record as
the original record. In this case, the paper printout or static record, or a true copy, must be
retained (§ 211.180).

However, electronic records from certain types of laboratory instruments— whether stand-alone
or networked— are dynamic, and a printout or a static record does not preserve the dynamic
record format that is part of the complete original record. For example, the spectral file created
by FT-IR (Fourier transform infrared spectroscopy) is dynamic and can be reprocessed.
However, a static record or printout is fixed and would not satisfy CGMP requirements to retain
original records or true copies (§ 211.180(d)). Also, if the full spectrum is not displayed in the
printout, contaminants may be excluded.

You must ensure that original laboratory records, including paper and electronic records, are
subject to second-person review (§ 211.194(a)(8)) to make certain that all test results and
associated information are appropriately reported. Similarly, in microbiology, a
contemporaneous written record is maintained of the colony counts of a petri dish, and the record
is then subject to second-person review.

Document control requirements in § 211.180 pertain only to CGMP records.

For more information on static and dynamic records, see 1.d. in this guidance. For PET drugs,
see the guidance for industry PET Drugs— Current Good Manufacturing Practice (CGMP) for
discussion of equipment and laboratory controls, including regulatory requirements for records.

11. Can electronic signatures be used instead of handwritten signatures for master
production and control records?

Yes, electronic signatures with the appropriate controls can be used instead of handwritten
signatures or initials in any CGMP required record. Although § 211.186(a) specifies a "full
signature, handwritten," an electronic signature with the appropriate controls to securely link the
signature with the associated record fulfills this requirement (21 CFR 11.2(a)). See part 11,
which establishes criteria for when electronic signatures are considered the legally binding
equivalent of handwritten signatures. Firms using electronic signatures should document the
controls used to ensure that they are able to identify the specific person who signed the records
electronically.

There is no requirement for a handwritten signature for the MPCR in the PET CGMP regulations
(21 CFR part 212).

12. When does electronic data become a CGMP record?

When generated to satisfy a CGMP requirement, all data become a CGMP record. You must
document, or save, the data at the time of performance to create a record in compliance with
CGMP requirements, including, but not limited to, §§ 211.100(b) and 211.160(a).

FDA expects processes to be designed so that data required to be created and maintained cannot
be modified without a record of the modification. For example, chromatographic data should be
saved to durable media upon completion of each step or injection (e.g., peak integration or
processing steps; finished, incomplete, or aborted injections) instead of at the end of an injection
set, and changes to the chromatographic data or injection sequence should be documented in an
audit trail. Aborted or incomplete injections should be captured in audit trails and should be
investigated and justified.

It is not acceptable to record data on pieces of paper that will be discarded after the data are
transcribed to a permanent laboratory notebook (see §§ 211.100(b), 211.160(a), and 211.180(d)).
Similarly, it is not acceptable to store electronic records in a manner that allows for manipulation
without creating a permanent record.

You may employ a combination of technical and procedural controls to meet CGMP
documentation practices for electronic systems. For example, a computer system, such as a
Laboratory Information Management System (LIMS) or an Electronic Batch Record (EBR)
system, can be designed to automatically save after each entry. This would be similar to indelibly
recording each entry contemporaneously on a paper batch record to satisfy CGMP requirements.
The computer system described above could be combined with a procedure requiring data be
keyed in or otherwise entered immediately when generated.

For PET drugs, see the "Laboratory Controls" section of the guidance for industry PET Drugs—
Current Good Manufacturing Practice (CGMP).

13. Why has FDA cited use of actual samples during "system suitability" or test, prep,
or equilibration runs in warning letters?

FDA prohibits sampling and testing with the goal of achieving a specific result or to overcome
an unacceptable result (e.g., testing different samples until the desired passing result is obtained).
This practice, also referred to as testing into compliance, is not consistent with CGMP (see the
guidance for industry Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical
Production). In some situations, use of actual samples to perform system suitability testing has
been used as a means of testing into compliance. FDA considers it a violative practice to use an
actual sample in test, prep, or equilibration runs as a means of disguising testing into
compliance.

[Guidance continues with USP system-suitability and OOS-investigation material not excerpted
further here — out of scope for a blood-establishment BECS/data-integrity course; not cited.]

14. Is it acceptable to only save the final results from reprocessed laboratory
chromatography?

No. Analytical methods should be accurate and precise. For most lab analyses, reprocessing
data should not be regularly needed. If chromatography is reprocessed, written procedures must
be established and followed and each result retained for review (see §§ 211.160, 211.165(c),
211.194(a)(4), and 212.60(a)). FDA requires complete data in laboratory records, which includes
but is not limited to notebooks, worksheets, graphs, charts, spectra, and other types of data from
laboratory instruments (§§ 211.194(a) and 212.60(g)(3)).

15. Can an internal tip or information regarding a quality issue, such as potential data
falsification, be handled informally outside of the documented CGMP quality
system?

No. Regardless of intent or how or from whom the information was received, suspected or
known falsification or alteration of records required under parts 210, 211, and 212 must be fully
investigated under the CGMP quality system to determine the effect of the event on patient
safety, product quality, and data reliability; to determine the root cause; and to ensure the
necessary corrective actions are taken (see §§ 211.22(a), 211.125(c), 211.192, 211.198, 211.204,
and 212.100).

FDA invites individuals to report suspected data integrity issues that may affect the safety,
identity, strength, quality, or purity of drug products at DrugInfo@fda.hhs.gov. "CGMP data
integrity" should be included in the subject line of the email. This reporting method is not
intended to supersede other FDA reports (e.g., field alert reports or biological product deviation
reports that help identify drug products that pose potential safety threats).

16. Should personnel be trained in preventing and detecting data integrity issues as part
of a routine CGMP training program?

Yes. Training personnel to prevent and detect data integrity issues is consistent with the
personnel requirements under §§ 211.25 and 212.10, which state that personnel must have the
education, training, and experience, or any combination thereof, to perform their assigned duties.

17. Is FDA allowed to look at electronic records?

Yes. All records required under CGMP are subject to FDA inspection. This applies to records
generated and maintained on computerized systems, including electronic communications that
support CGMP activities. For example, an email to authorize batch release is a CGMP record
that FDA may review.

You must allow authorized inspection, review, and copying of records, which includes copying
of electronic data (§§ 211.180(c) and 212.110(a) and (b)). See also the guidance for industry
Circumstances that Constitute Delaying, Denying, Limiting, or Refusing a Drug Inspection and
section 704 of the FD&C Act. Procedures governing the review of electronic records are
described in chapter 5 of the Investigations Operations Manual (IOM).

18. How does FDA recommend data integrity problems be addressed?

FDA encourages you to demonstrate that you have effectively remediated your problems by
investigating to determine the problem's scope and root causes, conducting a scientifically sound
risk assessment of its potential effects (including impact on data used to support submissions to
FDA), and implementing a management strategy, including a global corrective action plan that
addresses the root causes. This may include retaining a third-party auditor and removing
individuals responsible for data integrity lapses from positions where they can influence CGMP-
related or drug application data at your firm. It also may include improvements in quality
oversight, enhanced computer systems, and creation of mechanisms to prevent recurrences and
address data integrity breaches (e.g., anonymous reporting system, data governance officials and
guidelines).

These expectations mirror those developed for the Application Integrity Policy.
