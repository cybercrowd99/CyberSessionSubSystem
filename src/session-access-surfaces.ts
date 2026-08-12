/**
 * SESSION — CyberCrowd
 *
 * Access Surface Registry
 *
 * ONE JOB:
 * Declare the structural access surfaces exposed by SESSION.
 *
 * Ownership boundary:
 *
 *   SESSION
 *    │
 *    ├── SESSION-CONTEXT
 *    ├── SESSION-IDENTITY
 *    ├── SESSION-CONTINUITY
 *    └── SESSION-EVIDENCE
 *
 * This module does not:
 * - execute service behavior
 * - infer capability
 * - infer intent
 * - authorize actions
 * - transform session definitions
 * - enrich evidence
 * - create relationships
 * - transfer ownership
 *
 * It only declares the SESSION access-surface structure.
 */

export default {
  session: {
    context: "SESSION-CONTEXT",
    identity: "SESSION-IDENTITY",
    continuity: "SESSION-CONTINUITY",
    evidence: "SESSION-EVIDENCE",
  },
};
