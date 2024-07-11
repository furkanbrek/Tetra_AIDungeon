<script src="https://www.gstatic.com/firebasejs/${JSCORE_VERSION}/firebase.js"></script>

<script>
  var app = firebase.initializeApp({
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    projectId: '<your-cloud-firestore-project>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-sender-id>'
  });
  // ...
</script>