OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '750543655016-3p9a91g60q1u5d9ecrrqr2a6p2fvss04.apps.googleusercontent.com', 'XmiQpXJvmcEf9IKfp7WWAFzx', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
