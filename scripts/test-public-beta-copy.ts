import fs from 'node:fs';
import assert from 'node:assert/strict';
import manifest from '../src/i18n/manifest.json';
import { supporterCopy } from '../src/i18n/supporter-copy';
import { installationCopy } from '../src/i18n/installation-copy';
import { releases } from '../src/data/releases';
import { validateReleaseEditorialOverlay, releaseEditorialFor } from '../src/i18n/release-editorial';
import type { LocaleId } from '../src/i18n/config';

const release=releases.find(r=>r.version==='0.6.0-rc.15')!;
assert.equal(release.notes.length,7);assert.equal(release.knownIssues.length,2);
for(const l of manifest.locales.filter(l=>l.state==='active')){
 const locale=l.id as LocaleId;
 const {packet}=JSON.parse(fs.readFileSync(`.cache/locale-client/${locale}.json`,'utf8'));
 assert.equal(Object.keys(packet.surfaces).length,17);
 assert.deepEqual(packet.surfaces.home.payload.comparison,supporterCopy[locale]);
 assert.deepEqual(packet.surfaces.buy.payload.support,supporterCopy[locale]);
 assert.deepEqual(packet.surfaces.download.payload.supportCouchMode,supporterCopy[locale]);
 assert.deepEqual(packet.surfaces.download.payload.installation,installationCopy[locale]);
 const overlay=packet.surfaces.changelog.payload.release.editorial;
 const editorial=releaseEditorialFor(locale,release,overlay)!;
 assert.equal(editorial.notes.length,7);assert.equal(editorial.knownIssues.length,2);
 if(locale!=='en'){
  assert.deepEqual(validateReleaseEditorialOverlay(releases,overlay),[]);
  const missing={entries:overlay.entries.filter((e:{version:string})=>e.version!==release.version)};
  assert.ok(validateReleaseEditorialOverlay(releases,missing).length>0,`${locale} missing rc.15 overlay must fail`);
  assert.equal(releaseEditorialFor(locale,release,missing),undefined,`${locale} no English fallback`);
 }
 const text=JSON.stringify([packet.surfaces.home,packet.surfaces.download.payload.supportCouchMode,packet.surfaces.buy]);
 assert.doesNotMatch(text,/7-day|7-täg|7 gün|7日間|7일|signed public beta|beta pública assinada/);
 // Inspect every current surface, including legal/support and normalized MDX.
 // Historical release editorial is deliberately outside this current-model gate.
 const currentText=JSON.stringify([packet.shared,Object.entries(packet.surfaces).filter(([id])=>id!=='changelog').map(([,surface])=>surface)]);
 const obsolete = [
  /Pro Version|Pro access|Pro license validation|entitlement status|activation limits?|activation error/i,
  /Pro-Zugang|Pro-Zugangs|Pro-Lizenzvalidierung|Aktivierungslimit|Aktivierungsfehler|Berechtigungsstatus/i,
  /Pro erişim|Pro lisans doğrulaması|yetkilendirme durumu|etkinleştirme sınırı|etkinleştirme hatası/i,
  /accès à Pro|licence Pro|droits d'accès|limites? d'activation|erreur d'activation/i,
  /acceso a Pro|licencia Pro|autorización de acceso|límites? de activaci[oó]n|error de activación/i,
  /accesso Pro|licenza Pro|stato dei diritti di accesso|limite di attivazione|errore di attivazione/i,
  /acesso Pro|licença Pro|estado do direito de acesso|limite de ativaç|erro de ativação/i,
  /dostępu? do Pro|licencji Pro|stan(?:u)? uprawnień|limit aktywacji|błędu aktywacji/i,
  /Proの利用権|Pro利用権|Proライセンス|利用権の状態|有効化の上限|有効化エラー/,
  /Pro 이용 권한|Pro 라이선스|이용 권한 상태|활성화 제한|활성화 오류/,
  /\bFree\b/,
 ];
 for(const pattern of obsolete)assert.doesNotMatch(currentText,pattern,`${locale}: obsolete current-model wording`);
 assert.ok(packet.surfaces.privacy.payload.sections[6].paragraphs[1][0].text.includes('license.couchmode.app'));
 assert.ok(packet.surfaces.support.payload.include.items[8].includes('Patreon'));
 assert.ok(packet.surfaces.support.payload.include.items[8].includes('Pro Supporter'));
 // Real software-license provisions and actual activation-token data disclosures
 // remain valid; do not ban "license" or "activation" indiscriminately.
}
console.log('Public-beta copy: all 170 surfaces/shared reviewed, historical editorial excluded; supporter/unsigned copy, 7+2 release entries, missing-overlay/no-fallback negatives PASS');
