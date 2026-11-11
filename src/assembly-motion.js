export const clamp = value => Math.min(1, Math.max(0, value));

// One shared clock keeps component placement, selection and cursors in sync.
export function assemblyStep(progress, index, count) {
  const duration = .75 / Math.max(1, count);
  const start = .08 + index * duration;
  const local = clamp((progress-start)/duration);
  return {local, placed: 1-Math.pow(1-local,3), selected: local>0 && local<1};
}
