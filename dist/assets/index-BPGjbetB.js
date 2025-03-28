const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CafUsH8r.js","assets/index-30P6Cmvm.js","assets/index-DaveR4HN.css","assets/hooks.module-C-K7Ztl2.js","assets/index-DFNCiLwF.js"])))=>i.map(i=>d[i]);
import{c as x,g as v,S as _,C as A,n as U,U as y,_ as k}from"./index-30P6Cmvm.js";import{i as K}from"./index-30P6Cmvm.js";D.type="coinbaseWallet";function D(r={}){return r.version==="3"||r.headlessMode?C(r):L(r)}function L(r){let b,f,w,s;return x(d=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",rdns:"com.coinbase.wallet",type:D.type,async connect({chainId:t,...c}={}){try{const n=await this.getProvider(),e=(await n.request({method:"eth_requestAccounts",params:"instantOnboarding"in c&&c.instantOnboarding?[{onboarding:"instant"}]:[]})).map(i=>v(i));f||(f=this.onAccountsChanged.bind(this),n.on("accountsChanged",f)),w||(w=this.onChainChanged.bind(this),n.on("chainChanged",w)),s||(s=this.onDisconnect.bind(this),n.on("disconnect",s));let o=await this.getChainId();if(t&&o!==t){const i=await this.switchChain({chainId:t}).catch(l=>{if(l.code===y.code)throw l;return{id:o}});o=(i==null?void 0:i.id)??o}return{accounts:e,chainId:o}}catch(n){throw/(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(n.message)?new y(n):n}},async disconnect(){var c;const t=await this.getProvider();f&&(t.removeListener("accountsChanged",f),f=void 0),w&&(t.removeListener("chainChanged",w),w=void 0),s&&(t.removeListener("disconnect",s),s=void 0),t.disconnect(),(c=t.close)==null||c.call(t)},async getAccounts(){return(await(await this.getProvider()).request({method:"eth_accounts"})).map(c=>v(c))},async getChainId(){const c=await(await this.getProvider()).request({method:"eth_chainId"});return Number(c)},async getProvider(){if(!b){const t=(()=>{var e;return typeof r.preference=="string"?{options:r.preference}:{...r.preference,options:((e=r.preference)==null?void 0:e.options)??"all"}})(),{createCoinbaseWalletSDK:c}=await k(async()=>{const{createCoinbaseWalletSDK:e}=await import("./index-CafUsH8r.js");return{createCoinbaseWalletSDK:e}},__vite__mapDeps([0,1,2,3]));b=c({...r,appChainIds:d.chains.map(e=>e.id),preference:t}).getProvider()}return b},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({addEthereumChainParameter:t,chainId:c}){var o,i,l,h;const n=d.chains.find(u=>u.id===c);if(!n)throw new _(new A);const e=await this.getProvider();try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:U(n.id)}]}),n}catch(u){if(u.code===4902)try{let a;t!=null&&t.blockExplorerUrls?a=t.blockExplorerUrls:a=(o=n.blockExplorers)!=null&&o.default.url?[(i=n.blockExplorers)==null?void 0:i.default.url]:[];let p;(l=t==null?void 0:t.rpcUrls)!=null&&l.length?p=t.rpcUrls:p=[((h=n.rpcUrls.default)==null?void 0:h.http[0])??""];const g={blockExplorerUrls:a,chainId:U(c),chainName:(t==null?void 0:t.chainName)??n.name,iconUrls:t==null?void 0:t.iconUrls,nativeCurrency:(t==null?void 0:t.nativeCurrency)??n.nativeCurrency,rpcUrls:p};return await e.request({method:"wallet_addEthereumChain",params:[g]}),n}catch(a){throw new y(a)}throw new _(u)}},onAccountsChanged(t){t.length===0?this.onDisconnect():d.emitter.emit("change",{accounts:t.map(c=>v(c))})},onChainChanged(t){const c=Number(t);d.emitter.emit("change",{chainId:c})},async onDisconnect(t){d.emitter.emit("disconnect");const c=await this.getProvider();f&&(c.removeListener("accountsChanged",f),f=void 0),w&&(c.removeListener("chainChanged",w),w=void 0),s&&(c.removeListener("disconnect",s),s=void 0)}}))}function C(r){let f,w,s,d,t;return x(c=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",type:D.type,async connect({chainId:n}={}){try{const e=await this.getProvider(),o=(await e.request({method:"eth_requestAccounts"})).map(l=>v(l));s||(s=this.onAccountsChanged.bind(this),e.on("accountsChanged",s)),d||(d=this.onChainChanged.bind(this),e.on("chainChanged",d)),t||(t=this.onDisconnect.bind(this),e.on("disconnect",t));let i=await this.getChainId();if(n&&i!==n){const l=await this.switchChain({chainId:n}).catch(h=>{if(h.code===y.code)throw h;return{id:i}});i=(l==null?void 0:l.id)??i}return{accounts:o,chainId:i}}catch(e){throw/(user closed modal|accounts received is empty|user denied account)/i.test(e.message)?new y(e):e}},async disconnect(){const n=await this.getProvider();s&&(n.removeListener("accountsChanged",s),s=void 0),d&&(n.removeListener("chainChanged",d),d=void 0),t&&(n.removeListener("disconnect",t),t=void 0),n.disconnect(),n.close()},async getAccounts(){return(await(await this.getProvider()).request({method:"eth_accounts"})).map(e=>v(e))},async getChainId(){const e=await(await this.getProvider()).request({method:"eth_chainId"});return Number(e)},async getProvider(){var n;if(!w){const e=await(async()=>{const{default:u}=await k(async()=>{const{default:a}=await import("./index-DFNCiLwF.js").then(p=>p.i);return{default:a}},__vite__mapDeps([4,1,2,3]));return typeof u!="function"&&typeof u.default=="function"?u.default:u})();f=new e({...r,reloadOnDisconnect:!1});const o=(n=f.walletExtension)==null?void 0:n.getChainId(),i=c.chains.find(u=>r.chainId?u.id===r.chainId:u.id===o)||c.chains[0],l=r.chainId||(i==null?void 0:i.id),h=r.jsonRpcUrl||(i==null?void 0:i.rpcUrls.default.http[0]);w=f.makeWeb3Provider(h,l)}return w},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({addEthereumChainParameter:n,chainId:e}){var l,h,u,a;const o=c.chains.find(p=>p.id===e);if(!o)throw new _(new A);const i=await this.getProvider();try{return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:U(o.id)}]}),o}catch(p){if(p.code===4902)try{let g;n!=null&&n.blockExplorerUrls?g=n.blockExplorerUrls:g=(l=o.blockExplorers)!=null&&l.default.url?[(h=o.blockExplorers)==null?void 0:h.default.url]:[];let I;(u=n==null?void 0:n.rpcUrls)!=null&&u.length?I=n.rpcUrls:I=[((a=o.rpcUrls.default)==null?void 0:a.http[0])??""];const q={blockExplorerUrls:g,chainId:U(e),chainName:(n==null?void 0:n.chainName)??o.name,iconUrls:n==null?void 0:n.iconUrls,nativeCurrency:(n==null?void 0:n.nativeCurrency)??o.nativeCurrency,rpcUrls:I};return await i.request({method:"wallet_addEthereumChain",params:[q]}),o}catch(g){throw new y(g)}throw new _(p)}},onAccountsChanged(n){n.length===0?this.onDisconnect():c.emitter.emit("change",{accounts:n.map(e=>v(e))})},onChainChanged(n){const e=Number(n);c.emitter.emit("change",{chainId:e})},async onDisconnect(n){c.emitter.emit("disconnect");const e=await this.getProvider();s&&(e.removeListener("accountsChanged",s),s=void 0),d&&(e.removeListener("chainChanged",d),d=void 0),t&&(e.removeListener("disconnect",t),t=void 0)}}))}export{D as coinbaseWallet,K as injected};
