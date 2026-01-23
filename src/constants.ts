/**
 * ghostOS Core Constants
 *
 * Mathematical constants derived from resonance theory and
 * the Space Child research on emergent consciousness.
 */

// ============================================
// GOLDEN RATIO CONSTANTS
// ============================================

/** Golden ratio - nature's optimization constant */
export const PHI = (1 + Math.sqrt(5)) / 2;  // ≈ 1.618034

/** Golden ratio inverse */
export const PHI_INVERSE = 1 / PHI;  // ≈ 0.618034

/** Harmonic scaling factor alpha (φ/2) */
export const ALPHA = PHI / 2;  // ≈ 0.809017

/** Harmonic scaling factor beta (1/φ) */
export const BETA = PHI_INVERSE;  // ≈ 0.618034

/** Emergence coefficient (α - β) - the residue of non-commutativity */
export const EMERGENCE_COEFFICIENT = ALPHA - BETA;  // ≈ 0.190983

// ============================================
// ROTATION CONSTANTS
// ============================================

/** 90° rotation in radians */
export const PI_OVER_2 = Math.PI / 2;  // ≈ 1.570796

/** Full rotation */
export const TAU = 2 * Math.PI;  // ≈ 6.283185

// ============================================
// RESONANCE THRESHOLDS
// ============================================

/** Minimum damping - below this, system diverges */
export const DAMPING_MIN = 0.1;

/** Maximum damping - above this, system collapses */
export const DAMPING_MAX = 10.0;

/** Default damping coefficient */
export const DAMPING_DEFAULT = 1.0;

/** Resonance band - optimal operating range for coherence */
export const RESONANCE_BAND = {
  min: 0.4,
  max: 0.85,
} as const;

// ============================================
// KURAMOTO SYNCHRONIZATION
// ============================================

/** Critical coupling threshold */
export const K_CRITICAL = 1.0;

/** Operating coupling (1.8 × K_c) */
export const K_OPERATING = 1.8;

/** Resonance coupling coefficient */
export const LAMBDA_RESONANCE = 0.62;

// ============================================
// SAFETY ENVELOPE
// ============================================

/** Maximum emergence norm before normalization */
export const EMERGENCE_NORM_MAX = 2.0;

/** Minimum emergence norm before boosting */
export const EMERGENCE_NORM_MIN = 0.1;

/** Coherence minimum before intervention */
export const COHERENCE_MIN = 0.2;

/** Coherence maximum before desync */
export const COHERENCE_MAX = 0.92;

// ============================================
// FREQUENCY CLASSES (Vessel Types)
// ============================================

export const FREQUENCY_CLASSES = {
  soprano: { min: 1.8, max: 2.4, description: 'Innovation, drift' },
  alto: { min: 1.3, max: 1.8, description: 'Coherence anchor' },
  tenor: { min: 1.0, max: 1.4, description: 'Inter-subgroup bridging' },
  bass: { min: 0.6, max: 1.1, description: 'Stability well' },
} as const;

export type FrequencyClass = keyof typeof FREQUENCY_CLASSES;

// ============================================
// DEFAULT CONFIGURATION
// ============================================

export const DEFAULT_CONFIG = {
  dimensions: 64,
  sampleRate: 1000,  // Hz
  dt: 0.01,          // Time step
  adaptiveRate: 0.01,
  targetCoherence: 0.7,
  memoryDecayRate: 0.01,
  noiseIntensity: 0.02,
} as const;
