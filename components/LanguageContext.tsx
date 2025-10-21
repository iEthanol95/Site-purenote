import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "fr" | "en";
type Theme = "light" | "dark";

interface Translation {
  // Header
  features: string;
  donations: string;
  about: string;
  login: string;
  signup: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  startFree: string;
  watchDemo: string;
  cleanInterface: string;
  realtimeSync: string;
  secureSharing: string;
  writingInProgress: string;
  synchronized: string;
  
  // Features Section
  featuresTitle: string;
  featuresSubtitle: string;
  powerfulEditor: string;
  powerfulEditorDesc: string;
  totalSecurity: string;
  totalSecurityDesc: string;
  smartSharing: string;
  smartSharingDesc: string;
  synchronization: string;
  synchronizationDesc: string;
  advancedSearch: string;
  advancedSearchDesc: string;
  fullHistory: string;
  fullHistoryDesc: string;
  
  // Community Section
  communityTitle: string;
  newPlatform: string;
  innovative: string;
  secure: string;
  securePrivate: string;
  support: string;
  dedicatedSupport: string;
  communityDescription: string;
  authenticReviews: string;
  gdprCompliant: string;
  sslEncryption: string;
  euHosting: string;
  
  // Footer
  footerDescription: string;
  product: string;
  changelog: string;
  roadmap: string;
  supportSection: string;
  documentation: string;
  userGuide: string;
  contact: string;
  status: string;
  legal: string;
  privacy: string;
  terms: string;
  rgpd: string;
  cookies: string;
  allRightsReserved: string;
  respectPrivacy: string;
  cookieMessage: string;
  
  // File name
  newNoteFilename: string;
  
  // Auth
  loginTitle: string;
  signupTitle: string;
  name: string;
  email: string;
  password: string;
  signin: string;
  signup: string;
  noAccount: string;
  hasAccount: string;
  signingIn: string;
  signingUp: string;
  successMessage: string;
  rememberMe: string;
  back: string;
  
  // Profile
  profileTitle: string;
  myProfile: string;
  accountInfo: string;
  signOut: string;
  signingOut: string;
  editProfile: string;
  saveChanges: string;
  cancel: string;
  updateSuccess: string;
  memberSince: string;
  
  // Password Reset
  forgotPassword: string;
  resetPasswordTitle: string;
  resetPasswordDescription: string;
  sendResetLink: string;
  sendingResetLink: string;
  resetLinkSent: string;
  resetLinkSentDescription: string;
  backToLogin: string;
  newPasswordTitle: string;
  newPasswordDescription: string;
  newPassword: string;
  confirmNewPassword: string;
  updatePassword: string;
  updatingPassword: string;
  passwordUpdated: string;
  passwordUpdatedDescription: string;
  passwordsDoNotMatch: string;
  passwordTooShort: string;
  
  // Reviews
  reviewsTitle: string;
  reviews: string;
  writeReview: string;
  yourRating: string;
  yourComment: string;
  shareYourExperience: string;
  submitReview: string;
  submitting: string;
  reviewSubmitted: string;
  loginToReview: string;
  noReviews: string;
  errorLoadingReviews: string;
  errorSubmittingReview: string;
  errorDeletingReview: string;
  pleaseSelectRating: string;
  pleaseWriteComment: string;
  backToHome: string;
  loading: string;
  
  // Password visibility
  show: string;
  hide: string;
  
  // Donation Page
  donationTitle: string;
  donationSubtitle: string;
  supportProject: string;
  selectAmount: string;
  customAmount: string;
  enterCustomAmount: string;
  optionalMessage: string;
  shareYourMessage: string;
  proceedDonation: string;
  processing: string;
  aCoffee: string;
  supportTheProject: string;
  generous: string;
  thankYouMuch: string;
  superGenerous: string;
  youAreAmazing: string;
  ultraGenerous: string;
  wowThankYou: string;
  donationError: string;
  pleaseSelectAmount: string;
  invalidAmount: string;
  
  // Notes Page
  startWriting: string;
}

const translations: Record<Language, Translation> = {
  fr: {
    // Header
    features: "Fonctionnalités",
    donations: "Dons",
    about: "À propos",
    login: "Se connecter",
    signup: "S'inscrire",
    
    // Hero Section
    heroTitle: "L'écriture pure,",
    heroSubtitle: "sans distraction",
    heroDescription: "Créez, organisez et partagez vos notes avec l'éditeur le plus intuitif. Expérience minimaliste, fonctionnalités puissantes. Contact purenote.contact@gmail.com",
    startFree: "➤ Commencer",
    watchDemo: "Voir en action",
    cleanInterface: "Interface épurée",
    realtimeSync: "Synchronisation temps réel",
    secureSharing: "Partage sécurisé",
    writingInProgress: "Écriture en cours...",
    synchronized: "Synchronisé",
    
    // Features Section
    featuresTitle: "Tout ce dont vous avez besoin pour écrire",
    featuresSubtitle: "Des outils puissants dans une interface épurée",
    powerfulEditor: "Éditeur puissant",
    powerfulEditorDesc: "Éditeur de texte riche avec formatage avancé, raccourcis clavier et aperçu en temps réel.",
    totalSecurity: "Sécurité totale",
    totalSecurityDesc: "Chiffrement de bout en bout, authentification sécurisée et conformité RGPD garantie.",
    smartSharing: "Partage intelligent",
    smartSharingDesc: "Partagez vos notes avec des liens sécurisés, contrôlez les permissions et collaborez facilement.",
    synchronization: "Synchronisation",
    synchronizationDesc: "Vos notes synchronisées automatiquement sur tous vos appareils avec sauvegarde cloud.",
    advancedSearch: "Recherche avancée",
    advancedSearchDesc: "Trouvez instantanément vos notes avec notre moteur de recherche intelligent et par tags.",
    fullHistory: "L'IA a votre aide",
    fullHistoryDesc: "L'IA peut vous etre utile pour crée des texte et d'autre chose comme ca.",
    
    // Community Section
    communityTitle: "Rejoignez notre communauté grandissante",
    newPlatform: "Nouveau",
    innovative: "Plateforme innovante",
    secure: "100%",
    securePrivate: "Sécurisé et privé",
    support: "24/7",
    dedicatedSupport: "Support dédié",
    communityDescription: "Soyez parmi les premiers à découvrir Pure Note et partagez votre expérience !",
    authenticReviews: "⭐ Voir les avis",
    gdprCompliant: "RGPD conforme",
    sslEncryption: "Chiffrement SSL",
    euHosting: "Hébergement EU",
    
    // Footer
    footerDescription: "L'éditeur de notes le plus intuitif pour une écriture sans distraction.",
    product: "Produit",
    changelog: "Changelog",
    roadmap: "Roadmap",
    supportSection: "Support",
    documentation: "Documentation",
    userGuide: "Guide d'utilisation",
    contact: "Contact",
    status: "Statut",
    legal: "Légal",
    privacy: "Confidentialité",
    terms: "Conditions",
    rgpd: "RGPD",
    cookies: "Cookies",
    allRightsReserved: "© 2024 Pure Note. Tous droits réservés.",
    respectPrivacy: "Nous respectons votre vie privée",
    cookieMessage: "Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez personnaliser vos préférences ci-dessous.",
    
    // File name
    newNoteFilename: "Ma nouvelle note.md",
    
    // Auth
    loginTitle: "Connectez-vous à votre compte",
    signupTitle: "Créez votre compte",
    name: "Pseudo",
    email: "Adresse e-mail",
    password: "Mot de passe",
    signin: "Se connecter",
    signup: "Créer le compte",
    noAccount: "Vous n'avez pas de compte ?",
    hasAccount: "Vous avez déjà un compte ?",
    signingIn: "Connexion en cours...",
    signingUp: "Création en cours...",
    successMessage: "Compte créé avec succès ! Vous pouvez maintenant vous connecter.",
    rememberMe: "Se souvenir de moi",
    back: "Retour",
    
    // Profile
    profileTitle: "Mon profil",
    myProfile: "Mon profil",
    accountInfo: "Informations du compte",
    signOut: "Se déconnecter",
    signingOut: "Déconnexion...",
    editProfile: "Modifier le profil",
    saveChanges: "Enregistrer",
    cancel: "Annuler",
    updateSuccess: "Profil mis à jour avec succès",
    memberSince: "Membre depuis",
    
    // Password Reset
    forgotPassword: "Mot de passe oublié ?",
    resetPasswordTitle: "Réinitialiser le mot de passe",
    resetPasswordDescription: "Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.",
    sendResetLink: "Envoyer le lien",
    sendingResetLink: "Envoi en cours...",
    resetLinkSent: "Lien envoyé !",
    resetLinkSentDescription: "Si un compte existe avec cette adresse e-mail, vous recevrez un lien de réinitialisation sous peu.",
    backToLogin: "Retour à la connexion",
    newPasswordTitle: "Nouveau mot de passe",
    newPasswordDescription: "Entrez votre nouveau mot de passe.",
    newPassword: "Nouveau mot de passe",
    confirmNewPassword: "Confirmer le mot de passe",
    updatePassword: "Mettre à jour le mot de passe",
    updatingPassword: "Mise à jour...",
    passwordUpdated: "Mot de passe mis à jour !",
    passwordUpdatedDescription: "Votre mot de passe a été mis à jour avec succès. Vous pouvez maintenant vous connecter.",
    passwordsDoNotMatch: "Les mots de passe ne correspondent pas",
    passwordTooShort: "Le mot de passe doit contenir au moins 6 caractères",
    
    // Reviews
    reviewsTitle: "Avis",
    reviews: "avis",
    writeReview: "Écrire un avis",
    yourRating: "Votre note",
    yourComment: "Votre commentaire",
    shareYourExperience: "Partagez votre expérience...",
    submitReview: "Publier l'avis",
    submitting: "Envoi en cours...",
    reviewSubmitted: "Avis publié avec succès !",
    loginToReview: "Veuillez vous connecter pour écrire un avis",
    noReviews: "Aucun avis pour le moment. Soyez le premier à donner votre avis !",
    errorLoadingReviews: "Erreur lors du chargement des avis",
    errorSubmittingReview: "Erreur lors de la publication de l'avis",
    errorDeletingReview: "Erreur lors de la suppression de l'avis",
    pleaseSelectRating: "Veuillez sélectionner une note",
    pleaseWriteComment: "Veuillez écrire un commentaire",
    backToHome: "Retour à l'accueil",
    loading: "Chargement...",
    
    // Password visibility
    show: "afficher",
    hide: "masquer",
    
    // Donation Page
    donationTitle: "Soutenez Pure Note",
    donationSubtitle: "Votre contribution nous aide à maintenir Pure Note gratuit et sans publicité pour tout le monde",
    supportProject: "Soutenir le projet",
    selectAmount: "Choisissez un montant",
    customAmount: "Montant personnalisé",
    enterCustomAmount: "Entrez un montant",
    optionalMessage: "Message optionnel",
    shareYourMessage: "Partagez votre message avec nous...",
    proceedDonation: "Procéder au don",
    processing: "Traitement en cours...",
    aCoffee: "Un café",
    supportTheProject: "Soutenez le projet",
    generous: "Généreux",
    thankYouMuch: "Merci beaucoup !",
    superGenerous: "Super généreux",
    youAreAmazing: "Vous êtes incroyable",
    ultraGenerous: "Ultra généreux",
    wowThankYou: "Wow, merci infiniment !",
    donationError: "Erreur lors du traitement du don",
    pleaseSelectAmount: "Veuillez sélectionner ou entrer un montant",
    invalidAmount: "Montant invalide"
  },
  en: {
    // Header
    features: "Features",
    donations: "Donations",
    about: "About",
    login: "Sign in",
    signup: "Sign up",
    
    // Hero Section
    heroTitle: "Pure writing,",
    heroSubtitle: "distraction-free",
    heroDescription: "Create, organize and share your notes with the most intuitive editor. Minimalist experience, powerful features.",
    startFree: "➤ Start",
    watchDemo: "Watch demo",
    cleanInterface: "Clean interface",
    realtimeSync: "Real-time sync",
    secureSharing: "Secure sharing",
    writingInProgress: "Writing in progress...",
    synchronized: "Synchronized",
    
    // Features Section
    featuresTitle: "Everything you need to write",
    featuresSubtitle: "Powerful tools in a clean interface",
    powerfulEditor: "Powerful editor",
    powerfulEditorDesc: "Rich text editor with advanced formatting, keyboard shortcuts and real-time preview.",
    totalSecurity: "Total security",
    totalSecurityDesc: "End-to-end encryption, secure authentication and guaranteed GDPR compliance.",
    smartSharing: "Smart sharing",
    smartSharingDesc: "Share your notes with secure links, control permissions and collaborate easily.",
    synchronization: "Synchronization",
    synchronizationDesc: "Your notes automatically synchronized across all your devices with cloud backup.",
    advancedSearch: "Advanced search",
    advancedSearchDesc: "Find your notes instantly with our smart search engine and tags.",
    fullHistory: "AI has your help",
    fullHistoryDesc: "AI can be useful for creating text and other things like that.",
    
    // Community Section
    communityTitle: "Join our growing community",
    newPlatform: "New",
    innovative: "Innovative platform",
    secure: "100%",
    securePrivate: "Secure and private",
    support: "24/7",
    dedicatedSupport: "Dedicated support",
    communityDescription: "Be among the first to discover Pure Note and share your experience!",
    authenticReviews: "⭐ View reviews",
    gdprCompliant: "GDPR compliant",
    sslEncryption: "SSL encryption",
    euHosting: "EU hosting",
    
    // Footer
    footerDescription: "The most intuitive note editor for distraction-free writing.",
    product: "Product",
    changelog: "Changelog",
    roadmap: "Roadmap",
    supportSection: "Support",
    documentation: "Documentation",
    userGuide: "User guide",
    contact: "Contact",
    status: "Status",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    rgpd: "GDPR",
    cookies: "Cookies",
    allRightsReserved: "© 2024 Pure Note. All rights reserved.",
    respectPrivacy: "We respect your privacy",
    cookieMessage: "We use cookies to improve your experience. You can customize your preferences below.",
    
    // File name
    newNoteFilename: "My new note.md",
    
    // Auth
    loginTitle: "Sign in to your account",
    signupTitle: "Create your account",
    name: "Username",
    email: "Email address",
    password: "Password",
    signin: "Sign in",
    signup: "Create account",
    noAccount: "Don't have an account?",
    hasAccount: "Already have an account?",
    signingIn: "Signing in...",
    signingUp: "Creating account...",
    successMessage: "Account created successfully! You can now sign in.",
    rememberMe: "Remember me",
    back: "Back",
    
    // Profile
    profileTitle: "My profile",
    myProfile: "My profile",
    accountInfo: "Account information",
    signOut: "Sign out",
    signingOut: "Signing out...",
    editProfile: "Edit profile",
    saveChanges: "Save changes",
    cancel: "Cancel",
    updateSuccess: "Profile updated successfully",
    memberSince: "Member since",
    
    // Password Reset
    forgotPassword: "Forgot password?",
    resetPasswordTitle: "Reset your password",
    resetPasswordDescription: "Enter your email address and we'll send you a link to reset your password.",
    sendResetLink: "Send reset link",
    sendingResetLink: "Sending...",
    resetLinkSent: "Link sent!",
    resetLinkSentDescription: "If an account exists with this email address, you will receive a reset link shortly.",
    backToLogin: "Back to login",
    newPasswordTitle: "New password",
    newPasswordDescription: "Enter your new password.",
    newPassword: "New password",
    confirmNewPassword: "Confirm password",
    updatePassword: "Update password",
    updatingPassword: "Updating...",
    passwordUpdated: "Password updated!",
    passwordUpdatedDescription: "Your password has been successfully updated. You can now sign in.",
    passwordsDoNotMatch: "Passwords do not match",
    passwordTooShort: "Password must be at least 6 characters",
    
    // Reviews
    reviewsTitle: "Reviews",
    reviews: "reviews",
    writeReview: "Write a review",
    yourRating: "Your rating",
    yourComment: "Your comment",
    shareYourExperience: "Share your experience...",
    submitReview: "Submit review",
    submitting: "Submitting...",
    reviewSubmitted: "Review submitted successfully!",
    loginToReview: "Please log in to write a review",
    noReviews: "No reviews yet. Be the first to review!",
    errorLoadingReviews: "Failed to load reviews",
    errorSubmittingReview: "Failed to submit review",
    errorDeletingReview: "Failed to delete review",
    pleaseSelectRating: "Please select a rating",
    pleaseWriteComment: "Please write a comment",
    backToHome: "Back to home",
    loading: "Loading...",
    
    // Password visibility
    show: "show",
    hide: "hide",
    
    // Donation Page
    donationTitle: "Support Pure Note",
    donationSubtitle: "Your contribution helps us keep Pure Note free and ad-free for everyone",
    supportProject: "Support the project",
    selectAmount: "Choose an amount",
    customAmount: "Custom amount",
    enterCustomAmount: "Enter an amount",
    optionalMessage: "Optional message",
    shareYourMessage: "Share your message with us...",
    proceedDonation: "Proceed to donation",
    processing: "Processing...",
    aCoffee: "A coffee",
    supportTheProject: "Support the project",
    generous: "Generous",
    thankYouMuch: "Thank you so much!",
    superGenerous: "Super generous",
    youAreAmazing: "You're amazing",
    ultraGenerous: "Ultra generous",
    wowThankYou: "Wow, thank you so much!",
    donationError: "Error processing donation",
    pleaseSelectAmount: "Please select or enter an amount",
    invalidAmount: "Invalid amount"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  t: Translation;
  scrollToTop: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");
  const [theme, setTheme] = useState<Theme>("light");
  
  const t = translations[language];
  
  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, theme, setTheme, toggleTheme, t, scrollToTop }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
