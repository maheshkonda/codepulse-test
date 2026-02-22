// CodePulse Test File — intentional code smells

// 1. Long function with deep nesting and high complexity
function processUserData(a: any, b: any, c: any, d: any, e: any) {
  if (a) {
    if (b) {
      if (c) {
        if (d) {
          if (e) {
            console.log('five levels deep');
          }
        }
      }
    }
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        console.log(i, j, k);
      }
    }
  }
  const x = 1; const y = 2; const z = 3;
  const p = 4; const q = 5; const r = 6;
  const s = 7; const t = 8; const u = 9;
  console.log(x, y, z, p, q, r, s, t, u);
  return a && b && c && d && e;
}

// 2. Unused variable (dead code)
const unusedVar = 'never used anywhere';

// 3. Duplicate string literals (sonarjs/no-duplicate-string)
function getLabels() {
  const l1 = 'CodePulse Analysis Report';
  const l2 = 'CodePulse Analysis Report';
  const l3 = 'CodePulse Analysis Report';
  const l4 = 'CodePulse Analysis Report';
  return [l1, l2, l3, l4];
}

// 4. Explicit any usage
function riskyFunction(data: any): any {
  const result: any = data as any;
  return result;
}

// 5. High cyclomatic complexity
function complexSwitch(val: number): string {
  switch(val) {
    case 1: return 'one';
    case 2: return 'two';
    case 3: return 'three';
    case 4: return 'four';
    case 5: return 'five';
    case 6: return 'six';
    case 7: return 'seven';
    case 8: return 'eight';
    case 9: return 'nine';
    case 10: return 'ten';
    case 11: return 'eleven';
    case 12: return 'twelve';
    default: return 'unknown';
  }
}
