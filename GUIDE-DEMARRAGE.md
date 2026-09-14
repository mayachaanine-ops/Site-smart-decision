# Guide de démarrage — Site Smart Decision

Ce guide part du principe que tu n'as jamais installé de projet web.
Suis les parties dans l'ordre. Compte environ 1 heure pour tout faire la première fois.

---

## PARTIE 1 — Installer les outils sur ton ordinateur

Tu as besoin de **deux logiciels gratuits**. C'est tout.

### 1.1 — Node.js

Node.js, c'est le moteur qui fait tourner le site sur ton ordinateur pendant que tu travailles dessus.

1. Va sur **https://nodejs.org**
2. Clique sur le gros bouton de gauche, celui marqué **LTS** (version stable)
3. Ouvre le fichier téléchargé, clique « Suivant » jusqu'au bout, puis « Terminer »

**Vérifier que ça a marché :**
- Sur Windows : appuie sur la touche Windows, tape `cmd`, appuie sur Entrée
- Sur Mac : appuie sur Cmd + Espace, tape `Terminal`, appuie sur Entrée

Cette fenêtre noire (ou blanche) s'appelle le **terminal**. Tape dedans :

```
node -v
```

Si un numéro s'affiche (par exemple `v22.11.0`), c'est bon. Sinon, redémarre l'ordinateur et réessaie.

### 1.2 — Visual Studio Code

C'est l'éditeur dans lequel tu ouvriras les fichiers du site.

1. Va sur **https://code.visualstudio.com**
2. Télécharge, installe
3. Une fois ouvert, clique sur l'icône des extensions (les 4 carrés, à gauche), cherche **Astro** et installe l'extension officielle. Elle colore le code et te signale les erreurs.

---

## PARTIE 2 — Mettre le code sur ton ordinateur

Tu n'as **rien à copier-coller à la main**. Tout le code est dans l'archive `smart-decision.zip`.

1. Télécharge `smart-decision.zip`
2. Fais un clic droit dessus → **Extraire tout** (Windows) ou double-clic (Mac)
3. Range le dossier obtenu à un endroit simple à retrouver, par exemple :
   - Windows : `C:\Users\TonNom\Documents\smart-decision`
   - Mac : `/Users/TonNom/Documents/smart-decision`
4. Ouvre Visual Studio Code → menu **Fichier** → **Ouvrir le dossier** → sélectionne `smart-decision`

Tu vois maintenant la liste des fichiers à gauche.

### Lancer le site sur ton ordinateur

Dans Visual Studio Code, ouvre le terminal intégré : menu **Terminal** → **Nouveau terminal**.
Tape ces deux commandes, une à la fois, en appuyant sur Entrée après chacune :

```
npm install
```

*(Cette commande télécharge les briques du projet. Elle prend 1 à 2 minutes et ne se fait qu'une seule fois. Elle crée un dossier `node_modules` — c'est normal, n'y touche pas.)*

```
npm run dev
```

Une adresse s'affiche, du type `http://localhost:4321`.
Ouvre-la dans ton navigateur : **ton site est là.**

Va sur `http://localhost:4321/fr/` pour la version française, `/en/` pour l'anglaise.

**Le mieux :** laisse cette fenêtre ouverte. Chaque fois que tu enregistres un fichier, la page se met à jour toute seule dans le navigateur.

Pour arrêter : clique dans le terminal et appuie sur `Ctrl + C`.

---

## PARTIE 3 — Comprendre les fichiers

```
smart-decision/
│
├── src/
│   ├── i18n/
│   │   └── ui.ts              ← 🟢 TOUS LES TEXTES DU SITE (FR + EN)
│   │                             et tes coordonnées
│   ├── styles/
│   │   └── global.css         ← 🟢 LES COULEURS de la marque
│   │
│   ├── layouts/
│   │   └── Base.astro         ← les balises SEO (titre, description…)
│   │
│   ├── components/            ← les morceaux de la page
│   │   ├── Header.astro       ← le menu du haut
│   │   ├── Hero.astro         ← la grande section d'accueil
│   │   ├── About.astro        ← « À propos »
│   │   ├── Services.astro     ← les 3 piliers
│   │   ├── Portfolio.astro    ← les réalisations
│   │   ├── Blog.astro         ← les articles
│   │   ├── Contact.astro      ← le formulaire
│   │   └── Footer.astro       ← le bas de page
│   │
│   └── pages/                 ← les pages réelles du site
│       ├── fr/index.astro     ← page d'accueil française
│       └── en/index.astro     ← page d'accueil anglaise
│
├── public/robots.txt          ← instructions pour Google
├── astro.config.mjs           ← réglages du projet
└── wrangler.toml              ← réglages Cloudflare
```

### Les deux seuls fichiers que tu toucheras au quotidien

**`src/i18n/ui.ts`** — tous les textes.
Chaque phrase y est écrite deux fois : une dans la partie `fr`, une dans la partie `en`.
Change le texte entre les guillemets, enregistre, la page se met à jour.

⚠️ Ne supprime jamais les guillemets `'` ni les virgules en fin de ligne : le site ne s'afficherait plus.

**`src/styles/global.css`** — les couleurs.
Change `--color-navy: #123A6E;` et tout le bleu du site change d'un coup.

---

## PARTIE 4 — Publier le site sur Cloudflare

### 4.1 — Créer un compte GitHub

GitHub est l'endroit où ton code est stocké en ligne. Cloudflare ira le chercher là-bas automatiquement.

1. Crée un compte gratuit sur **https://github.com**
2. Télécharge **GitHub Desktop** sur **https://desktop.github.com** (évite d'avoir à taper des commandes)
3. Ouvre GitHub Desktop, connecte-toi
4. Menu **File** → **Add local repository** → choisis ton dossier `smart-decision`
5. S'il propose de créer un dépôt (*create a repository*), accepte
6. En bas à gauche, écris un petit message (par exemple `première version`) puis clique **Commit to main**
7. En haut, clique **Publish repository**. **Décoche « Keep this code private »** si tu veux, mais ce n'est pas obligatoire : Cloudflare accède aussi aux dépôts privés.

### 4.2 — Connecter Cloudflare

1. Crée un compte gratuit sur **https://dash.cloudflare.com**
2. Dans le menu de gauche : **Workers & Pages** → **Create** → onglet **Pages** → **Connect to Git**
3. Autorise Cloudflare à accéder à GitHub, puis sélectionne le dépôt `smart-decision`
4. Cloudflare te demande comment construire le site. Renseigne :

| Champ | Valeur à saisir |
|---|---|
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |

5. Clique **Save and Deploy**

Après 1 à 2 minutes, ton site est en ligne à une adresse du type
`smart-decision.pages.dev`.

### 4.3 — Brancher ton vrai nom de domaine

1. Dans ton projet Cloudflare Pages → onglet **Custom domains** → **Set up a custom domain**
2. Entre `smart-decision.net`
3. Cloudflare t'indique les **enregistrements DNS** à créer. Si ton domaine est déjà géré par Cloudflare, tout se fait en un clic. Sinon, il faut copier ces valeurs chez ton hébergeur de domaine actuel.
4. Compte jusqu'à 24 h pour que le changement se propage partout dans le monde (souvent c'est instantané).

### 4.4 — Mettre le site à jour, ensuite

Une fois tout branché, publier une modification tient en trois clics :

1. Tu modifies un texte dans `ui.ts` et tu enregistres
2. Dans GitHub Desktop : message + **Commit to main** → **Push origin**
3. Cloudflare détecte le changement et republie le site tout seul

---

## PARTIE 5 — Le référencement (SEO)

### Ce qui est déjà fait dans le code

| Élément | À quoi ça sert | Où |
|---|---|---|
| Balise `<title>` | Le titre bleu cliquable dans Google | `ui.ts` → `meta.title` |
| `<meta description>` | Le petit texte gris sous le titre | `ui.ts` → `meta.description` |
| `hreflang` | Dit à Google qu'il existe une version FR et une EN | `Base.astro` |
| `canonical` | Évite que Google croie à du contenu dupliqué | `Base.astro` |
| Données structurées | Décrit ton entreprise à Google (nom, téléphone, ville) | `Base.astro` |
| `sitemap-index.xml` | La carte du site, générée automatiquement | auto |
| `robots.txt` | Autorise Google à tout explorer | `public/robots.txt` |
| Pages pré-générées | Le site est en HTML pur : très rapide, Google adore | Astro |
| Balises Open Graph | L'aperçu quand on partage le lien sur LinkedIn | `Base.astro` |

### Ce que tu dois faire toi

**1. Soigner tes titres et descriptions.**
Le `title` fait 50 à 60 caractères, la `description` 150 à 160. Écris pour un humain, pas pour un robot, et mets le mot que tes clients tapent réellement dans Google.

Exemple à éviter : « Accueil — Smart Decision »
Exemple efficace : « Smart Decision — Conseil IT, cloud et financement à Paris »

**2. Inscrire le site sur Google Search Console.**
- Va sur **https://search.google.com/search-console**
- Ajoute ta propriété `smart-decision.net`
- Cloudflare te permet de valider la propriété via un enregistrement DNS
- Dans **Sitemaps**, soumets : `https://smart-decision.net/sitemap-index.xml`

C'est l'étape qui déclenche réellement l'indexation. Sans elle, Google peut mettre des semaines à te trouver.

**3. Écrire des articles de blog.**
C'est le levier SEO le plus puissant et le plus sous-utilisé. Une page d'accueil se positionne sur 2 ou 3 expressions ; vingt articles se positionnent sur des centaines. Un article utile de 800 à 1 200 mots qui répond à une vraie question de client vaut mieux que dix articles creux.

**4. Remplir les attributs `alt` des images.**
Quand tu ajouteras de vraies photos, chaque image doit décrire ce qu'elle montre : `alt="Équipe Smart Decision en réunion de cadrage"`. Google ne voit pas les images, il lit ce texte.

**5. Créer ta fiche Google Business Profile.**
Gratuit, et décisif pour les recherches locales du type « conseil IT Paris ».

**6. Obtenir des liens entrants.**
Quand un autre site pointe vers le tien, Google y voit un vote de confiance. Annuaires professionnels, partenaires, clients qui te citent : ce sont les liens qui font grimper un site, plus que n'importe quel réglage technique.

### Vérifier ton score

Une fois le site en ligne, teste-le sur **https://pagespeed.web.dev**. Avec cette configuration, tu devrais dépasser 95/100. Si le score baisse un jour, c'est presque toujours à cause d'images trop lourdes.

---

## En cas de blocage

| Problème | Solution |
|---|---|
| `npm` n'est pas reconnu | Node.js n'est pas installé, ou l'ordinateur n'a pas redémarré |
| La page est blanche | Regarde le terminal : le message d'erreur indique le fichier et la ligne |
| Le site ne se met plus à jour | Arrête (`Ctrl + C`) puis relance `npm run dev` |
| Cloudflare échoue au déploiement | Vérifie que la commande est bien `npm run build` et le dossier `dist` |
| Une modif de `ui.ts` casse tout | Tu as sûrement supprimé un guillemet ou une virgule |

---

## À faire avant la mise en ligne définitive

- [ ] Remplacer les chiffres de démonstration (500+ projets, 300+ clients, 50+ collaborateurs, « depuis 2018 ») par les vrais
- [ ] Confirmer le nom exact : « Smart Decision » ou « Smart Web Decision »
- [ ] Vérifier le domaine : `smart-decision.net` ou `smartdecision.ai`
- [ ] Remplacer les projets et articles du portfolio par les vrais
- [ ] Ajouter le logo officiel en SVG
- [ ] Brancher le formulaire de contact (il ne fait rien pour l'instant : il faut la base de données)
- [ ] Rédiger les mentions légales et la politique de confidentialité (obligatoire en France)
