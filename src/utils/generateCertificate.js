// Certificate Generator using HTML5 Canvas to create high-resolution downloadable certificates
import logoUrl from '../assets/eduskills-logo.png';

export const downloadCertificate = ({
  studentName = "Harish A.",
  domain = "Google AI-ML",
  cohort = "Cohort 12",
  type = "Final",
  certificateId = "EDU-CERT-GAIML-2024-C12-9842"
}) => {
  const canvas = document.createElement("canvas");
  canvas.width = 1920;
  canvas.height = 1357;
  const ctx = canvas.getContext("2d");

  const logoImg = new Image();
  logoImg.crossOrigin = "anonymous";
  logoImg.src = logoUrl;

  const renderAndDownload = () => {
    // Background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Outer Decorative Border
    ctx.strokeStyle = "#1e3a8a";
    ctx.lineWidth = 14;
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

    // Inner Thin Border
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);

    // Corner decorative triangles/accents
    const drawCorner = (x, y, flipX, flipY) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
      ctx.fillStyle = "#1e3a8a";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(80, 0);
      ctx.lineTo(0, 80);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#f59e0b";
      ctx.beginPath();
      ctx.moveTo(10, 10);
      ctx.lineTo(60, 10);
      ctx.lineTo(10, 60);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    drawCorner(37, 37, false, false);
    drawCorner(canvas.width - 37, 37, true, false);
    drawCorner(37, canvas.height - 37, false, true);
    drawCorner(canvas.width - 37, canvas.height - 37, true, true);

    // Draw Official EduSkills Logo
    if (logoImg.complete && logoImg.naturalWidth > 0) {
      const logoWidth = 460;
      const logoHeight = (logoImg.naturalHeight / logoImg.naturalWidth) * logoWidth;
      ctx.drawImage(logoImg, (canvas.width - logoWidth) / 2, 90, logoWidth, logoHeight);
    } else {
      ctx.textAlign = "center";
      ctx.font = "bold 52px system-ui, sans-serif";
      ctx.fillStyle = "#0f172a";
      ctx.fillText("EduSkills", 960, 150);
    }

    // Certificate Badge / Ribbon
    ctx.textAlign = "center";
    ctx.font = "bold 20px system-ui, sans-serif";
    ctx.fillStyle = "#2563eb";
    ctx.fillText("AICTE - EDUSKILLS VIRTUAL INTERNSHIP PROGRAM", 960, 245);

    // Title
    ctx.font = "bold 64px Georgia, serif";
    ctx.fillStyle = "#1e293b";
    ctx.fillText("Certificate of Completion", 960, 340);

    // Subtitle
    ctx.font = "italic 24px Georgia, serif";
    ctx.fillStyle = "#64748b";
    ctx.fillText("This is to certify that", 960, 420);

    // Candidate Name
    ctx.font = "bold 60px Georgia, serif";
    ctx.fillStyle = "#1d4ed8";
    ctx.fillText(studentName, 960, 510);

    // Decorative Underline
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(560, 545);
    ctx.lineTo(1360, 545);
    ctx.stroke();

    // Certificate Description
    ctx.font = "normal 26px system-ui, sans-serif";
    ctx.fillStyle = "#334155";
    const desc1 = `has successfully completed a 10-week Virtual Internship in ${domain}`;
    const desc2 = `organized by EduSkills Foundation in collaboration with industry partners.`;
    const desc3 = `Duration: ${cohort} | Certificate Type: ${type} Internship Certificate`;
    
    ctx.fillText(desc1, 960, 620);
    ctx.fillText(desc2, 960, 670);
    ctx.font = "600 24px system-ui, sans-serif";
    ctx.fillStyle = "#0f172a";
    ctx.fillText(desc3, 960, 720);

    // Gold Seal in bottom middle
    const sealX = 960;
    const sealY = 920;
    ctx.save();
    ctx.beginPath();
    ctx.arc(sealX, sealY, 90, 0, Math.PI * 2);
    ctx.fillStyle = "#fef3c7";
    ctx.fill();
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#d97706";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(sealX, sealY, 78, 0, Math.PI * 2);
    ctx.strokeStyle = "#b45309";
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#b45309";
    ctx.font = "bold 16px system-ui, sans-serif";
    ctx.fillText("★ OFFICIAL SEAL ★", sealX, sealY - 40);
    ctx.font = "bold 24px Georgia, serif";
    ctx.fillText("EduSkills", sealX, sealY);
    ctx.font = "bold 14px system-ui, sans-serif";
    ctx.fillText("VERIFIED INTERNSHIP", sealX, sealY + 32);
    ctx.restore();

    // Bottom Signatures & Verification
    // Left: Authorized Signatory
    ctx.textAlign = "left";
    ctx.strokeStyle = "#64748b";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(250, 1080);
    ctx.lineTo(550, 1080);
    ctx.stroke();

    ctx.font = "italic bold 32px Georgia, serif";
    ctx.fillStyle = "#1e3a8a";
    ctx.fillText("Satya R. Biswal", 280, 1060);

    ctx.font = "600 20px system-ui, sans-serif";
    ctx.fillStyle = "#0f172a";
    ctx.fillText("Dr. Satya Ranjan Biswal", 250, 1115);
    ctx.font = "16px system-ui, sans-serif";
    ctx.fillStyle = "#64748b";
    ctx.fillText("Executive Director, EduSkills", 250, 1145);

    // Right: Partner Signatory
    ctx.textAlign = "right";
    ctx.beginPath();
    ctx.moveTo(canvas.width - 550, 1080);
    ctx.lineTo(canvas.width - 250, 1080);
    ctx.stroke();

    ctx.font = "italic bold 32px Georgia, serif";
    ctx.fillStyle = "#047857";
    const partnerName = domain.toLowerCase().includes("celonis")
      ? "Celonis Academic Alliance"
      : "Google Developer Relations";
    ctx.fillText(partnerName, canvas.width - 270, 1060);

    ctx.font = "600 20px system-ui, sans-serif";
    ctx.fillStyle = "#0f172a";
    ctx.fillText("Program Lead", canvas.width - 250, 1115);
    ctx.font = "16px system-ui, sans-serif";
    ctx.fillStyle = "#64748b";
    ctx.fillText("Industry & Academic Alliances", canvas.width - 250, 1145);

    // Bottom Center metadata
    ctx.textAlign = "center";
    ctx.font = "15px monospace";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(`Certificate ID: ${certificateId}  •  Issue Date: Oct 2024  •  Verify at: verify.eduskillsfoundation.org`, 960, 1260);

    // Create download link
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `EduSkills_${domain.replace(/[^a-zA-Z0-9]/g, "_")}_${cohort.replace(/[^a-zA-Z0-9]/g, "_")}_Certificate.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (logoImg.complete) {
    renderAndDownload();
  } else {
    logoImg.onload = renderAndDownload;
    logoImg.onerror = renderAndDownload;
  }
};
