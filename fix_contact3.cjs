const fs = require("fs");
let contact = fs.readFileSync("app/contact/ContactClient.jsx", "utf8");

// find CHANNELS.map block and rewrite it completely safely.
const blockStart = '{CHANNELS.map((c) => (';
const blockEnd = '))}';
const startIndex = contact.indexOf(blockStart);
const endIndex = contact.indexOf(blockEnd, startIndex);

const newBlock = `{CHANNELS.map((c) => 
                c.href ? (
                  <a href={c.href} className="contact-channel" key={c.label} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    <span className="contact-channel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{c.icon}</svg></span>
                    <div>
                      <div className="channel-label">{c.label}</div>
                      <div className="channel-value">{c.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="contact-channel" key={c.label}>
                    <span className="contact-channel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{c.icon}</svg></span>
                    <div>
                      <div className="channel-label">{c.label}</div>
                      <div className="channel-value">{c.value}</div>
                    </div>
                  </div>
                )
              )}`;

contact = contact.slice(0, startIndex) + newBlock + contact.slice(endIndex + blockEnd.length);

fs.writeFileSync("app/contact/ContactClient.jsx", contact);
console.log("Fixed Contact channel rendering properly");
