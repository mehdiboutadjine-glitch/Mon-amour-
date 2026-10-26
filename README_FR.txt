SITE ROMANTIQUE — POUR MON AMOUR
================================

FICHIERS
- index.html : page du site
- script.js  : date PIN, messages des cadeaux et lien musical

PERSONNALISER LA DATE
1. Ouvre script.js dans Bloc-notes ou un éditeur de texte.
2. Cherche : pin: "14/02/2025",
3. Remplace 14/02/2025 par la date souhaitée, au format JJ/MM/AAAA.
4. Enregistre le fichier.

PERSONNALISER LES CADEAUX
Dans script.js, modifie title et message pour chacun des trois cadeaux.
Pour ajouter une chanson, colle un lien dans musicUrl: "https://...".
Le lien s'affichera après ouverture de la surprise.

TESTER
Double-clique sur index.html pour l'ouvrir dans un navigateur.
Entre le PIN défini dans script.js.
Les modifications faites dans l'éditeur de messages du site sont enregistrées localement sur cet appareil.

PUBLIER GRATUITEMENT AVEC GITHUB PAGES
1. Crée/ouvre un compte GitHub.
2. Crée un nouveau dépôt public, par exemple mon-amour.
3. Téléverse index.html, script.js et README_FR.txt à la racine du dépôt.
4. Dans Settings > Pages, choisis le déploiement depuis la branche principale (main) et le dossier /(root).
5. Attends que GitHub Pages affiche l'adresse du site. Teste cette adresse sur ton téléphone.

QR CODES
Les QR codes doivent contenir l'adresse publique du site, donc crée-les APRÈS la publication.
- QR principal : adresse publique du site.
- QR cadeau 1 : même adresse avec #cadeau1
- QR cadeau 2 : même adresse avec #cadeau2
- QR cadeau 3 : même adresse avec #cadeau3

Fonctionnement : les QR cadeaux ouvrent le site avec un cadeau demandé. La personne saisit d'abord le PIN; ensuite le cadeau correspondant s'ouvre automatiquement. Les QR ne contournent pas le PIN.

CONFIDENTIALITÉ / SÉCURITÉ
Le PIN est dans le JavaScript du navigateur et peut être vu par une personne qui inspecte les fichiers. C'est adapté à une surprise romantique, pas à protéger des informations sensibles. Pour une vraie confidentialité, il faut un serveur avec authentification.


CRÉER LES 4 QR CODES APRÈS PUBLICATION
Utilise un générateur de QR code fiable, et colle ces adresses :
- QR principal : https://VOTRE-ADRESSE-PUBLIQUE/
- QR cadeau 1 : https://VOTRE-ADRESSE-PUBLIQUE/#cadeau1
- QR cadeau 2 : https://VOTRE-ADRESSE-PUBLIQUE/#cadeau2
- QR cadeau 3 : https://VOTRE-ADRESSE-PUBLIQUE/#cadeau3

Remplace VOTRE-ADRESSE-PUBLIQUE par l'adresse exacte donnée par GitHub Pages.
Les QR finaux ne peuvent pas être générés correctement avant de connaître l'URL publique.
