# 🚀 **Guide de Déploiement Vercel - Pas à Pas**

## **📍 Vous êtes ici : Configuration des Variables d'Environnement**

---

## **✅ Étape 1 : Sauvegarder les Variables (EN COURS)**

### **Actions Immédiates :**

1. **Cliquer sur le bouton "Save"** en bas à droite de la page
   - ✅ Vous avez déjà ajouté `RESEND_API_KEY`
   - ✅ Vous avez déjà ajouté `NEXT_PUBLIC_VERCEL`
   - 🔴 **Il faut maintenant SAUVEGARDER**

2. **Vérifier que les variables sont bien enregistrées**
   - Le message rouge "No environment variables were created" devrait disparaître
   - Vous devriez voir vos 2 variables listées

---

## **✅ Étape 2 : Déclencher un Nouveau Déploiement**

Une fois les variables sauvegardées :

### **Option A : Via l'Interface Vercel**

1. Aller dans l'onglet **"Deployments"** (en haut)
2. Cliquer sur **"Redeploy"** pour le dernier déploiement
3. Cocher **"Use existing Build Cache"** (optionnel)
4. Cliquer sur **"Redeploy"**

### **Option B : Via Git Push**

```bash
# Dans votre terminal local
cd /home/gaetanx/Documents/protfolio

# Faire un petit changement (optionnel)
echo "# Deployment ready" >> DEPLOYMENT.md

# Commit et push
git add .
git commit -m "chore: Trigger deployment with env vars"
git push origin master
```

---

## **✅ Étape 3 : Vérifier le Déploiement**

### **Pendant le Déploiement (2-3 minutes)**

1. Aller dans **"Deployments"**
2. Vous verrez le statut :
   - 🟡 **Building** : En cours de compilation
   - 🟢 **Ready** : Déploiement réussi
   - 🔴 **Failed** : Erreur (voir les logs)

### **Vérifier les Logs**

Si le déploiement échoue :

1. Cliquer sur le déploiement en erreur
2. Aller dans **"Build Logs"**
3. Chercher les erreurs en rouge
4. Me les partager pour que je vous aide

---

## **✅ Étape 4 : Tester le Site en Production**

Une fois le déploiement réussi :

### **1. Accéder au Site**

Votre URL sera :

```
https://protfolio-gaetan5.vercel.app
```

ou

```
https://protfolio-[votre-username].vercel.app
```

### **2. Tests à Effectuer**

#### **Navigation**

- [ ] Tester tous les liens du menu
- [ ] Vérifier le smooth scroll
- [ ] Tester le menu hamburger sur mobile

#### **Contenu**

- [ ] Vérifier qu'il n'y a pas de placeholders (Contact_title, etc.)
- [ ] Vérifier les traductions FR/EN
- [ ] Vérifier les images (favicon, profile, projets)

#### **Fonctionnalités**

- [ ] Tester le formulaire de contact
  - Remplir le formulaire
  - Envoyer un message test
  - Vérifier la réception de l'email
- [ ] Tester le mode sombre/clair
- [ ] Tester les animations

#### **Performance**

- [ ] Ouvrir les DevTools (F12)
- [ ] Vérifier la console (pas d'erreurs rouges)
- [ ] Tester sur mobile (responsive)

---

## **✅ Étape 5 : Configuration du Domaine (Optionnel)**

Si vous voulez un domaine personnalisé :

### **Option A : Domaine Vercel Gratuit**

Votre domaine par défaut est déjà actif :

```
protfolio-[username].vercel.app
```

### **Option B : Domaine Personnalisé**

Si vous avez un domaine (ex: gaetan-ekoro.com) :

1. Aller dans **"Settings"** > **"Domains"**
2. Cliquer sur **"Add Domain"**
3. Entrer votre domaine : `gaetan-ekoro.com`
4. Suivre les instructions pour configurer les DNS
5. Ajouter les enregistrements DNS chez votre registrar :

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

## **🔧 Dépannage**

### **Problème 1 : Variables d'Environnement Non Sauvegardées**

**Symptôme :** Message "No environment variables were created"

**Solution :**

1. Vérifier que vous avez cliqué sur **"Save"**
2. Rafraîchir la page
3. Vérifier que les variables apparaissent dans la liste

### **Problème 2 : Déploiement Échoué**

**Symptôme :** Status "Failed" en rouge

**Solution :**

1. Cliquer sur le déploiement
2. Lire les **Build Logs**
3. Chercher les erreurs TypeScript ou ESLint
4. Corriger localement et re-push

### **Problème 3 : Formulaire de Contact Ne Fonctionne Pas**

**Symptôme :** Erreur lors de l'envoi du formulaire

**Solution :**

1. Vérifier que `RESEND_API_KEY` est bien configurée
2. Vérifier que la clé API est valide sur [resend.com](https://resend.com)
3. Vérifier les logs de l'API route dans Vercel

### **Problème 4 : Images Ne S'Affichent Pas**

**Symptôme :** Images cassées ou non chargées

**Solution :**

1. Vérifier que les images sont dans `/public`
2. Vérifier les chemins dans le code (ex: `/profile.png`)
3. Vérifier la configuration `next.config.js` pour les domaines externes

---

## **📊 Checklist Post-Déploiement**

### **Immédiat (Jour 1)**

- [ ] Variables d'environnement sauvegardées
- [ ] Déploiement réussi (status "Ready")
- [ ] Site accessible via l'URL Vercel
- [ ] Aucune erreur dans la console
- [ ] Formulaire de contact testé
- [ ] Mode sombre/clair fonctionne
- [ ] Responsive testé (mobile/tablette)

### **Court Terme (Semaine 1)**

- [ ] Tester sur différents navigateurs (Chrome, Firefox, Safari)
- [ ] Vérifier les performances avec Lighthouse
- [ ] Configurer Google Analytics (optionnel)
- [ ] Partager le portfolio sur LinkedIn
- [ ] Demander des retours à des amis/collègues

### **Moyen Terme (Mois 1)**

- [ ] Analyser les métriques Vercel Analytics
- [ ] Optimiser les images si nécessaire
- [ ] Ajouter du contenu (nouveaux projets, articles)
- [ ] Soumettre à Google Search Console
- [ ] Configurer un domaine personnalisé (optionnel)

---

## **🎯 Prochaines Étapes MAINTENANT**

### **Action Immédiate #1** 🔴

```
Cliquer sur le bouton "Save" en bas à droite
de la page des variables d'environnement
```

### **Action Immédiate #2**

```
Aller dans l'onglet "Deployments"
et cliquer sur "Redeploy"
```

### **Action Immédiate #3**

```
Attendre 2-3 minutes que le déploiement se termine
puis tester le site
```

---

## **📞 Support**

Si vous rencontrez un problème :

1. **Capturer une screenshot** de l'erreur
2. **Copier les logs** si disponibles
3. **Me partager** les informations
4. Je vous aiderai à résoudre le problème

---

## **🎉 Félicitations !**

Une fois le déploiement réussi, votre portfolio sera :

```
✅ En ligne 24/7
✅ Accessible mondialement
✅ Optimisé pour les performances
✅ Sécurisé avec HTTPS
✅ Prêt à être partagé
```

**Vous êtes à quelques clics de mettre votre portfolio en ligne ! 🚀**

---

**Guide créé le 21 Octobre 2025**  
**Portfolio : Gaetan X Ekoro**
