// 2026-11-24: is WebGL running on a real graphics chip?
// Without one (no GPU, GPU blocked by the browser, some virtual machines), browsers fall back to a software
// renderer such as SwiftShader or llvmpipe. The 3D scenes then run on the CPU and keep the page busy on every
// frame (measured: the homepage went from about 3 s of blocked time per 5 s to none with WebGL off). On those
// devices the scenes are skipped and the page shows its static design. Devices with a GPU are unaffected.
// This checks the device, not the visitor: everyone on software rendering gets the same page.
let cached = null;

export function hasHardwareWebGL() {
  if (cached !== null) return cached;
  cached = false;
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl', { failIfMajorPerformanceCaveat: true }) || c.getContext('experimental-webgl', { failIfMajorPerformanceCaveat: true });
    if (!gl) return cached;
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const name = String(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER));
    cached = !/swiftshader|llvmpipe|softpipe|software|basic render|mesa offscreen/i.test(name);
    const lose = gl.getExtension('WEBGL_lose_context');
    if (lose) lose.loseContext();
  } catch (e) {
    cached = false;
  }
  return cached;
}
