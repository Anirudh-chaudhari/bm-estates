/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";

export default function Chatbot() {
  useEffect(() => {
    const cfg: any = {
      webhookUrl: "https://oyik.cloud/webhook/a05f977e-05e7-461d-a8a3-70f9c7c05025/chat",
      companyName: "BM ESTATES",
      welcomeMessage: "Hello! Welcome to BM Estates Services. How can I help you today?\n",
      inputPlaceholder: "Type your message...",
      sendLabel: "Send",
      launcherLabel: "Chat",
      fontSize: 14,
      fontFamily: "Inter",
      launcherSize: 68,
      launcherRadius: 20,
      widgetRadius: 22,
      lineHeight: 1.4,
      borderWidth: 1,
      position: "right",
      bottom: "28px",
      autoOpen: false,
      colors: {
        primary: "#ff6b35",
        chatBackground: "#171c36",
        sendMessage: "#ff6b35",
        aiMessage: "rgba(255,255,255,0.12)",
        brandA: "#ff6b35",
        brandB: "#ff6b35",
        surface: "#171c36",
        botBubble: "rgba(255,255,255,0.12)",
        userBubble: "#ff6b35",
        page: "#eef3ff",
        text: "#ffffff"
      },
      quickReplies: [
        { id: 1, icon: "Rent", text: "I want to rent a property" },
        { id: 2, icon: "Buy", text: "I want to buy a property" }
      ],
      fontFamilyCss: "Inter, Segoe UI, sans-serif",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    };

    const root = document.getElementById("lk-chat");
    if (root) {
      root.innerHTML = "";
    }

    const fallbackLauncherSvg = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    
    const state: any = {
      open: !!cfg.autoOpen,
      typing: false,
      sessionId: "s_" + Date.now() + "_" + Math.random().toString(36).slice(2, 10),
      messages: [{ id: 1, text: cfg.welcomeMessage, user: false, properties: [] }],
    };

    function ensureThemeStyles() {
      if (document.getElementById("lk-chat-theme")) return;
      const style = document.createElement("style");
      style.id = "lk-chat-theme";
      style.textContent = [
        "#lk-chat{position:relative;z-index:9998;}",
        "#lk-chat .lk-widget{backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);transition:opacity .2s ease,transform .2s ease;}",
        "#lk-chat .lk-msgs{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.28) transparent;}",
        "#lk-chat .lk-msgs::-webkit-scrollbar{width:6px;}",
        "#lk-chat .lk-msgs::-webkit-scrollbar-thumb{background:rgba(255,255,255,.28);border-radius:999px;}",
        "#lk-chat .lk-bubble{box-shadow:inset 0 0 0 1px rgba(255,255,255,.03);}",
        "#lk-chat .lk-input{outline:none;}",
        "#lk-chat .lk-input:focus{box-shadow:0 0 0 2px rgba(255,255,255,.22);}",
        "#lk-chat .lk-send{transition:filter .2s ease,transform .16s ease;}",
        "#lk-chat .lk-send:hover{filter:brightness(1.04);}",
        "#lk-chat .lk-send:active{transform:translateY(1px);}",
        "#lk-chat .lk-close{transition:background .2s ease,transform .16s ease;}",
        "#lk-chat .lk-close:hover{background:rgba(255,255,255,.3);}",
        "#lk-chat .lk-close:active{transform:scale(.97);}",
        "#lk-chat .lk-quick{transition:background .2s ease,border-color .2s ease;}",
        "#lk-chat .lk-quick:hover{background:rgba(255,255,255,.13);border-color:rgba(255,255,255,.35);}",
        "#lk-chat .lk-launcher{transition:transform .18s ease,box-shadow .2s ease;}",
        "#lk-chat .lk-launcher:hover{transform:translateY(-1px);box-shadow:0 16px 30px rgba(0,0,0,.28);}",
        "#lk-chat .lk-typing{display:inline-flex;align-items:center;gap:5px;padding:6px 8px;margin-left:2px;}",
        "#lk-chat .lk-typing span{width:6px;height:6px;border-radius:999px;background:rgba(255,255,255,.8);display:inline-block;animation:lkDot 1.2s infinite ease-in-out;}",
        "#lk-chat .lk-typing span:nth-child(2){animation-delay:.15s;}",
        "#lk-chat .lk-typing span:nth-child(3){animation-delay:.3s;}",
        "#lk-chat .lk-powered{font-size:11px;color:rgba(255,255,255,.68);text-align:center;padding:0 0 8px;letter-spacing:.01em;}",
        "@keyframes lkDot{0%,80%,100%{transform:translateY(0);opacity:.35;}40%{transform:translateY(-4px);opacity:1;}}",
        "@media (max-width:900px){",
        "#lk-chat .lk-widget{width:min(360px,calc(100vw - 18px)) !important;height:min(72vh,560px) !important;bottom:86px !important;}",
        "}",
        "@media (max-width:640px){",
        "#lk-chat .lk-widget{left:10px !important;right:10px !important;width:auto !important;max-width:none !important;height:min(78vh,620px) !important;bottom:84px !important;border-radius:18px !important;}",
        "#lk-chat .lk-launcher{right:12px !important;left:auto !important;bottom:max(12px,env(safe-area-inset-bottom)) !important;}",
        "}",
        "@media (max-width:420px){",
        "#lk-chat .lk-widget{left:0 !important;right:0 !important;bottom:0 !important;height:100vh !important;border-radius:0 !important;max-width:none !important;}",
        "#lk-chat .lk-inputbar{padding-bottom:calc(10px + env(safe-area-inset-bottom)) !important;}",
        "}",
      ].join("");
      document.head.appendChild(style);
    }

    function applyStyles(el: HTMLElement, styles: any): HTMLElement {
      Object.keys(styles).forEach((key: any) => {
        (el.style as any)[key] = styles[key];
      });
      return el;
    }

    function parseJson(raw: any): any {
      try {
        return JSON.parse(raw);
      } catch {
        return null;
      }
    }

    function pick(...args: any[]): string {
      for (let i = 0; i < args.length; i += 1) {
        const val = args[i];
        if (typeof val === "string" && val.trim()) return val.trim();
        if (typeof val === "number" && Number.isFinite(val)) return String(val);
      }
      return "";
    }

    function normalizeProperties(list: any[]): any[] {
      if (!Array.isArray(list)) return [];
      return list
        .map((item: any, idx: number) => {
          const row = item && typeof item === "object" ? item : {};
          const bed = pick(row.bedrooms, row.beds, row.bhk, row.bed);
          const bath = pick(row.bathrooms, row.baths, row.bath);
          const bedBath = [bed ? bed + " bed" : "", bath ? bath + " bath" : ""].filter(Boolean).join(", ");
          const rawPrice = row.price;
          const price = pick(row.priceText, row.price_text, row.display_price, row.rent, row.amount, row.cost, rawPrice);
          const imageUrl = pick(row.imageUrl, row.image_url, row.image, row.public_url, row.publicUrl, row.thumbnail, row.photo);
          return {
            id: Date.now() + idx,
            title: pick(row.title, row.name, row.property_name, row.propertyTitle, row.project_name, "Property"),
            subtitle: pick(row.subtitle, row.description, row.summary, bedBath, row.location, row.address, row.locality),
            price: price,
            imageUrl: imageUrl,
          };
        })
        .filter((card: any) => card.title || card.subtitle || card.price || card.imageUrl)
        .slice(0, 10);
    }

    function parseWebhook(raw: any): any {
      const fallback = "Thanks for your message.";
      const text = (raw || "").trim();
      const parsedRoot = parseJson(text);
      if (!parsedRoot || typeof parsedRoot !== "object") {
        return { message: text || fallback, properties: [] };
      }

      let payloadNode = parsedRoot;
      if (Object.prototype.hasOwnProperty.call(parsedRoot, "output")) {
        const output = parsedRoot.output;
        if (typeof output === "string") {
          const nested = parseJson(output);
          payloadNode = nested && typeof nested === "object" ? nested : { message: output };
        } else if (output && typeof output === "object") {
          payloadNode = output;
        }
      }

      return {
        message: pick(payloadNode.message, payloadNode.response, payloadNode.reply, payloadNode.text) || fallback,
        properties: normalizeProperties(payloadNode.properties || parsedRoot.properties),
      };
    }

    function launcherPosition(): any {
      if (cfg.position === "left") return { left: "20px", right: "auto" };
      return { left: "auto", right: "20px" };
    }

    function ensureGlyphSize(host: HTMLElement) {
      const iconEl = host.querySelector("svg, img");
      if (!iconEl) {
        host.textContent = "C";
        host.style.fontSize = "14px";
        host.style.fontWeight = "700";
        host.style.lineHeight = "1";
        host.style.alignItems = "center";
        host.style.justifyContent = "center";
        return;
      }
      (iconEl as any).style.width = "100%";
      (iconEl as any).style.height = "100%";
      (iconEl as any).style.display = "block";
      (iconEl as any).style.objectFit = "contain";
    }

    function addPropertyRail(container: HTMLElement, properties: any[]) {
      if (!properties || !properties.length) return;

      const rail = applyStyles(document.createElement("div"), {
        display: "flex",
        gap: "10px",
        overflowX: "auto",
        padding: "2px 2px 6px",
        scrollbarWidth: "thin",
      });

      properties.forEach((property: any) => {
        const card = applyStyles(document.createElement("article"), {
          minWidth: "168px",
          maxWidth: "168px",
          background: "#ffffff",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.08)",
        });

        const imageWrap = applyStyles(document.createElement("div"), {
          height: "96px",
          background: "#e2e8f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        });

        if (property.imageUrl) {
          const image = document.createElement("img");
          image.src = property.imageUrl;
          image.alt = property.title || "Property";
          image.loading = "lazy";
          applyStyles(image, { width: "100%", height: "100%", objectFit: "cover" });
          imageWrap.appendChild(image);
        } else {
          const placeholder = document.createElement("span");
          placeholder.textContent = "No image";
          applyStyles(placeholder, { fontSize: "12px", color: "#64748b" });
          imageWrap.appendChild(placeholder);
        }

        const body = applyStyles(document.createElement("div"), {
          padding: "8px 9px 9px",
          color: "#0f172a",
        });

        const title = document.createElement("p");
        title.textContent = property.title || "Property";
        applyStyles(title, { margin: "0", fontSize: "12px", fontWeight: "700", lineHeight: "1.35" });
        body.appendChild(title);

        if (property.subtitle) {
          const subtitle = document.createElement("p");
          subtitle.textContent = property.subtitle;
          applyStyles(subtitle, { margin: "5px 0 0", fontSize: "11px", lineHeight: "1.3", color: "#475569" });
          body.appendChild(subtitle);
        }

        if (property.price) {
          const price = document.createElement("p");
          price.textContent = property.price;
          applyStyles(price, { margin: "7px 0 0", fontSize: "20px", fontWeight: "800", letterSpacing: "-0.02em" });
          body.appendChild(price);
        }

        card.appendChild(imageWrap);
        card.appendChild(body);
        rail.appendChild(card);
      });

      container.appendChild(rail);
    }

    function renderMessages(box: HTMLElement) {
      box.innerHTML = "";

      state.messages.forEach((message: any) => {
        const block = applyStyles(document.createElement("div"), {
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        });

        const row = applyStyles(document.createElement("div"), {
          display: "flex",
          justifyContent: message.user ? "flex-end" : "flex-start",
        });

        const bubble = document.createElement("div");
        bubble.className = "lk-bubble " + (message.user ? "is-user" : "is-bot");
        bubble.textContent = message.text;
        applyStyles(bubble, {
          maxWidth: "84%",
          padding: "9px 11px",
          borderRadius: "12px",
          color: cfg.colors.text,
          lineHeight: String(cfg.lineHeight),
          background: message.user ? cfg.colors.userBubble : cfg.colors.botBubble,
          fontSize: cfg.fontSize + "px",
        });
        row.appendChild(bubble);
        block.appendChild(row);

        if (!message.user && Array.isArray(message.properties) && message.properties.length > 0) {
          addPropertyRail(block, message.properties);
        }

        box.appendChild(block);
      });

      if (state.messages.length < 3 && Array.isArray(cfg.quickReplies)) {
        const quickWrap = applyStyles(document.createElement("div"), {
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        });

        cfg.quickReplies.forEach((quick: any) => {
          const quickButton = document.createElement("button");
          quickButton.className = "lk-quick";
          quickButton.textContent = quick.icon + " " + quick.text;
          applyStyles(quickButton, {
            border: "1px solid rgba(255,255,255,.2)",
            background: "rgba(255,255,255,.08)",
            color: "#fff",
            borderRadius: "999px",
            padding: "7px 10px",
            cursor: "pointer",
            fontSize: "12px",
          });
          quickButton.onclick = () => send(quick.text);
          quickWrap.appendChild(quickButton);
        });
        box.appendChild(quickWrap);
      }

      if (state.typing) {
        const typing = document.createElement("div");
        typing.className = "lk-typing";
        typing.innerHTML = "<span></span><span></span><span></span>";
        box.appendChild(typing);
      }

      box.scrollTop = box.scrollHeight;
    }

    async function send(forcedValue?: string) {
      const input = document.getElementById("lk-inp");
      const text = (forcedValue || (input ? (input as HTMLInputElement).value : "") || "").trim();
      if (!text) return;

      state.messages.push({ id: Date.now(), text: text, user: true, properties: [] });
      if (input) (input as HTMLInputElement).value = "";
      state.typing = true;
      render();
      const typingSince = Date.now();

      try {
        const response = await fetch(cfg.webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: text,
            timestamp: new Date().toISOString(),
            sessionId: state.sessionId,
          }),
        });
        const raw = await response.text();
        const parsed = parseWebhook(raw);
        state.messages.push({
          id: Date.now() + 1,
          text: parsed.message,
          user: false,
          properties: parsed.properties,
        });
      } catch {
        state.messages.push({
          id: Date.now() + 1,
          text: "Webhook not reachable.",
          user: false,
          properties: [],
        });
      } finally {
        const wait = 550 - (Date.now() - typingSince);
        if (wait > 0) {
          await new Promise((resolve) => setTimeout(resolve, wait));
        }
        state.typing = false;
        render();
      }
    }

    function render() {
      if (!root) return;
      root.innerHTML = "";
      const position = launcherPosition();
      ensureThemeStyles();

      if (state.open) {
        const widget = applyStyles(document.createElement("div"), {
          position: "fixed",
          left: position.left,
          right: position.right,
          bottom: "96px",
          width: "390px",
          maxWidth: "calc(100vw - 24px)",
          height: "560px",
          maxHeight: "calc(100vh - 108px)",
          borderRadius: cfg.widgetRadius + "px",
          overflow: "hidden",
          zIndex: "9999",
          background: cfg.colors.surface,
          border: cfg.borderWidth + "px solid rgba(255,255,255,.16)",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 18px 34px rgba(0,0,0,.35)",
          fontFamily: cfg.fontFamilyCss,
          fontSize: cfg.fontSize + "px",
        });
        widget.className = "lk-widget";

        const head = applyStyles(document.createElement("div"), {
          padding: "12px 14px",
          color: cfg.colors.text,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(135deg," + cfg.colors.brandA + "," + cfg.colors.brandB + ")",
        });
        head.className = "lk-head";
        const title = document.createElement("strong");
        title.textContent = cfg.companyName;
        const closeButton = document.createElement("button");
        closeButton.id = "lk-close";
        closeButton.className = "lk-close";
        closeButton.innerHTML = "&times;";
        applyStyles(closeButton, {
          border: "none",
          background: "rgba(255,255,255,.22)",
          color: "#fff",
          borderRadius: "999px",
          width: "28px",
          height: "28px",
          cursor: "pointer",
          fontSize: "18px",
          lineHeight: "1",
        });
        head.appendChild(title);
        head.appendChild(closeButton);

        const messageBox = document.createElement("div");
        messageBox.id = "lk-msgs";
        messageBox.className = "lk-msgs";
        applyStyles(messageBox, {
          flex: "1",
          overflowY: "auto",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        });

        const inputBar = applyStyles(document.createElement("div"), {
          display: "flex",
          gap: "7px",
          borderTop: "1px solid rgba(255,255,255,.14)",
          padding: "9px 9px 7px",
        });
        inputBar.className = "lk-inputbar";
        const input = document.createElement("input");
        input.id = "lk-inp";
        input.className = "lk-input";
        input.placeholder = cfg.inputPlaceholder;
        applyStyles(input, {
          flex: "1",
          border: "none",
          borderRadius: "9px",
          padding: "9px 10px",
          fontSize: "13px",
        });
        const sendButton = document.createElement("button");
        sendButton.id = "lk-send";
        sendButton.className = "lk-send";
        sendButton.textContent = cfg.sendLabel;
        applyStyles(sendButton, {
          border: "none",
          background: cfg.colors.brandA,
          color: "#fff",
          borderRadius: "9px",
          padding: "9px 12px",
          cursor: "pointer",
          fontSize: "13px",
        });
        inputBar.appendChild(input);
        inputBar.appendChild(sendButton);

        widget.appendChild(head);
        widget.appendChild(messageBox);
        widget.appendChild(inputBar);
        const poweredBy = document.createElement("div");
        poweredBy.className = "lk-powered";
        poweredBy.textContent = "Powered By Oyik.AI";
        widget.appendChild(poweredBy);
        root.appendChild(widget);

        renderMessages(messageBox);
        closeButton.onclick = () => {
          state.open = false;
          render();
        };
        sendButton.onclick = () => send();
        input.onkeydown = (event) => {
          if (event.key === "Enter") send();
        };
      }

      if (!state.open) {
        const launcher = document.createElement("button");
        launcher.className = "lk-launcher";
        applyStyles(launcher, {
          position: "fixed",
          left: position.left,
          right: position.right,
          bottom: cfg.bottom,
          width: cfg.launcherSize + "px",
          height: cfg.launcherSize + "px",
          border: "none",
          borderRadius: cfg.launcherRadius + "px",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "3px",
          zIndex: "9998",
          background: "linear-gradient(135deg," + cfg.colors.brandA + "," + cfg.colors.brandB + ")",
          boxShadow: "0 12px 24px rgba(0,0,0,.24)",
        });

        const iconWrap = applyStyles(document.createElement("span"), {
          width: "20px",
          height: "20px",
          display: "inline-flex",
          color: "#fff",
        });
        iconWrap.className = "lk-launcher-icon";
        iconWrap.innerHTML = cfg.iconSvg || fallbackLauncherSvg;
        ensureGlyphSize(iconWrap);

        const label = document.createElement("span");
        label.className = "lk-launcher-label";
        label.textContent = cfg.launcherLabel;
        applyStyles(label, { fontSize: "10px", fontWeight: "600" });

        launcher.appendChild(iconWrap);
        launcher.appendChild(label);
        launcher.onclick = () => {
          state.open = true;
          render();
        };
        root.appendChild(launcher);
      }
    }

    render();

    return () => {
      if (root) {
        root.innerHTML = "";
      }
    };
  }, []);

  return <div id="lk-chat" />;
}
