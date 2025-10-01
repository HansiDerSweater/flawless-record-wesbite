import Navbar from "./components/Navbar";
import { Bluetooth, Check, ChevronRight, ExternalLink, Headphones, Mic, Music, Shield, Zap } from "lucide-react";
import Footer from "./components/Footer";

export default function FlawlessRecordLanding() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 text-black">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-fuchsia-50 to-white py-20 md:py-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Built for Hip-Hop Producers
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Record <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Flawlessly</span> With Bluetooth Freedom
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  The only iOS app that lets you record with your iPhone&apos;s built-in microphone while monitoring through Bluetooth headphones. Perfect for sampling, instrument recording, and capturing room acoustics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://apps.apple.com/app/flawless-record"
                    target="_blank"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    Download on App Store
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                  <a 
                    href="#how-it-works"
                    className="inline-flex items-center justify-center border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-50 transition"
                  >
                    See How It Works
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-700 font-medium">100% Private</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-amber-500" />
                    <span className="text-sm text-gray-700 font-medium">One-Time Purchase</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-3xl p-1 shadow-2xl">
                  <div className="bg-white rounded-3xl p-8">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-fuchsia-50 rounded-2xl border-2 border-purple-200">
                        <div className="flex items-center space-x-4">
                          <div className="bg-white p-3 rounded-full shadow-lg">
                            <Mic className="h-8 w-8 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-bold text-lg text-gray-900">iPhone Mic</div>
                            <div className="text-sm text-gray-600">Recording Source</div>
                          </div>
                        </div>
                        <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      
                      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200">
                        <div className="flex items-center space-x-4">
                          <div className="bg-white p-3 rounded-full shadow-lg">
                            <Headphones className="h-8 w-8 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-bold text-lg text-gray-900">Bluetooth Headphones</div>
                            <div className="text-sm text-gray-600">Monitor + Metronome</div>
                          </div>
                        </div>
                        <Bluetooth className="h-6 w-6 text-blue-600" />
                      </div>
                      
                      <div className="text-center py-4">
                        <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-bold border-2 border-green-300">
                          <Check className="h-5 w-5" />
                          <span>Perfect Room Acoustics</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-amber-400 rounded-2xl p-4 shadow-xl transform rotate-12 hidden lg:block">
                  <Music className="h-8 w-8 text-amber-900" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-emerald-400 rounded-2xl p-4 shadow-xl transform -rotate-12 hidden lg:block">
                  <Zap className="h-8 w-8 text-emerald-900" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">The Problem We Solve</h2>
              <p className="text-xl text-gray-600">
                Ever tried to record a piano in your studio&apos;s large hall while needing to hear a metronome? Traditional recording forces you to choose between quality and convenience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg mb-4 font-semibold">
                  ✗ Without Flawless Record
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold text-xl">×</span>
                    <span>Bluetooth headphones force the use of their low-quality microphone</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold text-xl">×</span>
                    <span>Can&apos;t capture room acoustics when recording from a distance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold text-xl">×</span>
                    <span>Metronome bleeds into your recording</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold text-xl">×</span>
                    <span>Need to choose between monitoring and audio quality</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
                <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg mb-4 font-semibold">
                  ✓ With Flawless Record
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="text-green-500 h-6 w-6 flex-shrink-0" />
                    <span>Use iPhone&apos;s high-quality built-in microphone</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-green-500 h-6 w-6 flex-shrink-0" />
                    <span>Place your phone 15+ meters away to capture room acoustics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-green-500 h-6 w-6 flex-shrink-0" />
                    <span>Hear metronome privately through Bluetooth headphones</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-green-500 h-6 w-6 flex-shrink-0" />
                    <span>Monitor your performance without compromising recording quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">Powerful Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need for professional-quality recordings on the go
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Mic className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">iPhone Mic Recording</h3>
                <p className="text-gray-600">
                  Use your iPhone&apos;s superior built-in microphone for crystal-clear recordings, even while connected to Bluetooth headphones.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Headphones className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Bluetooth Monitoring</h3>
                <p className="text-gray-600">
                  Monitor your performance and hear the metronome through your Bluetooth headphones without affecting the recording.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="bg-fuchsia-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Music className="h-8 w-8 text-fuchsia-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Built-in Metronome</h3>
                <p className="text-gray-600">
                  Keep perfect time with our integrated metronome that only you can hear through your headphones.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Room Acoustics</h3>
                <p className="text-gray-600">
                  Capture the natural reverb and ambience of your space by placing your phone anywhere in the room.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">100% Private</h3>
                <p className="text-gray-600">
                  All processing happens on your device. We don&apos;t collect, store, or transmit any of your data or recordings.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="bg-rose-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Music className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Sample Ready</h3>
                <p className="text-gray-600">
                  Perfect for hip-hop producers and beat makers who need quick, high-quality samples from instruments and vocals.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three simple steps to professional recordings
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                  1
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Connect Your Bluetooth Headphones</h3>
                  <p className="text-gray-600 text-lg">
                    Pair your favorite Bluetooth headphones or earbuds with your iPhone as you normally would.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                  2
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Position Your iPhone</h3>
                  <p className="text-gray-600 text-lg">
                    Place your iPhone wherever you want to capture the best sound - close to the instrument, across the room for ambience, or anywhere in between.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Record Flawlessly</h3>
                  <p className="text-gray-600 text-lg">
                    Hit record and play. Hear the metronome through your headphones while the iPhone mic captures pristine audio with natural room acoustics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">Perfect For</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">🎹 Recording Instruments</h3>
                <p className="text-gray-600 mb-4">
                  Capture piano, guitar, drums, or any acoustic instrument with the full ambience of your recording space. Place your phone across the room to get that professional studio sound.
                </p>
                <p className="text-sm text-purple-600 font-semibold">
                  Example: Record a grand piano in your hall from 15 meters away while staying in perfect time with the metronome.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">🎤 Vocal Sampling</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for hip-hop producers who need clean vocal samples. Monitor your performance while recording with the iPhone&apos;s superior microphone.
                </p>
                <p className="text-sm text-purple-600 font-semibold">
                  Example: Record vocal chops and ad-libs for your beats without any metronome bleed.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">🥁 Live Drums</h3>
                <p className="text-gray-600 mb-4">
                  Set up your iPhone in the optimal position for drum recording while staying locked to the metronome through your headphones.
                </p>
                <p className="text-sm text-purple-600 font-semibold">
                  Example: Capture the natural kit sound with overhead placement while keeping perfect timing.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">🎸 Guitar & Bass</h3>
                <p className="text-gray-600 mb-4">
                  Record your amp or acoustic guitar with real room sound. Mic it up properly without being tethered to your phone.
                </p>
                <p className="text-sm text-purple-600 font-semibold">
                  Example: Place your phone in front of your amp while you play freely anywhere in the room.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600">
                One-time purchase. No subscriptions. No hidden fees.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8">
                  <div className="text-center space-y-6">
                    <div>
                      <div className="text-5xl font-bold mb-2 text-gray-900">$1.99</div>
                      <div className="text-gray-600 font-medium">One-time purchase</div>
                    </div>
                    
                    <ul className="space-y-4 text-left">
                      <li className="flex items-start space-x-3">
                        <Check className="text-emerald-500 h-6 w-6 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Unlimited recordings</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="text-emerald-500 h-6 w-6 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Built-in metronome</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="text-emerald-500 h-6 w-6 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">iPhone mic + Bluetooth monitoring</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="text-emerald-500 h-6 w-6 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">100% private - no data collection</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="text-emerald-500 h-6 w-6 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Lifetime updates</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="text-emerald-500 h-6 w-6 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">No subscriptions or in-app purchases</span>
                      </li>
                    </ul>
                    
                    <a 
                      href="https://apps.apple.com/app/flawless-record"
                      target="_blank"
                      className="block bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all"
                    >
                      Get Flawless Record
                    </a>
                    
                    <p className="text-sm text-gray-500">
                      Available on iOS. Requires iPhone with iOS 14.0 or later.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Record Flawlessly?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Join thousands of producers and musicians who are capturing professional-quality recordings with Flawless Record.
            </p>
            <a 
              href="https://apps.apple.com/app/flawless-record"
              target="_blank"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all"
            >
              Download Now - $1.99
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>

        {/* Legal Section */}
        <section id="legal" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">Legal Information</h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Imprint */}
              <div id="imprint" className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-6">Imprint / Impressum</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="font-semibold text-lg">Information according to § 5 TMG:</p>
                  <div>
                    <p className="font-semibold">Markus Biermeier</p>
                    <p>Otto-Kraus-Straße 9</p>
                    <p>90441 Nürnberg</p>
                    <p>Germany</p>
                  </div>
                  <div>
                    <p className="font-semibold">Contact:</p>
                    <p>Email: <a href="mailto:itsolutionsbiermeier@gmail.com" className="text-purple-600 hover:underline">itsolutionsbiermeier@gmail.com</a></p>
                  </div>
                  <div>
                    <p className="font-semibold">Responsible for content according to § 55 Abs. 2 RStV:</p>
                    <p>Markus Biermeier</p>
                    <p>Otto-Kraus-Straße 9</p>
                    <p>90441 Nürnberg</p>
                  </div>
                </div>
              </div>

              {/* Privacy Policy */}
              <div id="privacy" className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-6">Privacy Policy</h3>
                <div className="space-y-6 text-gray-700">
                  <p className="text-sm text-gray-500">Last updated: October 2025</p>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-3">1. Data Collection and Processing</h4>
                    <p className="mb-2">
                      Flawless Record is designed with your privacy as the top priority. We want to make this absolutely clear:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>We do NOT collect any personal data</li>
                      <li>We do NOT store any of your audio recordings</li>
                      <li>We do NOT transmit any data to our servers</li>
                      <li>We do NOT track your usage or behavior</li>
                      <li>We do NOT use analytics or third-party tracking tools</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">2. How the App Works</h4>
                    <p>
                      Flawless Record processes all audio recordings entirely on your device (client-side). Your recordings are saved directly to your iPhone&apos;s local storage and remain under your complete control. The app requires access to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li><strong>Microphone:</strong> To record audio using your iPhone&apos;s built-in microphone</li>
                      <li><strong>Bluetooth:</strong> To enable monitoring through your Bluetooth headphones</li>
                      <li><strong>Local Storage:</strong> To save your recordings on your device</li>
                    </ul>
                    <p className="mt-2">
                      These permissions are only used for the app&apos;s core functionality and never for data collection.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">3. Third-Party Services</h4>
                    <p>
                      Flawless Record does not integrate any third-party services, analytics platforms, or advertising networks. The app is completely self-contained and operates independently on your device.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">4. App Store Purchase Information</h4>
                    <p>
                      When you purchase Flawless Record through the Apple App Store, Apple processes your payment and personal information according to Apple&apos;s Privacy Policy. We, as the app developer, do not receive or have access to your personal payment information or Apple ID details.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">5. Your Audio Files</h4>
                    <p>
                      All audio recordings you create with Flawless Record are:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>Stored locally on your iPhone</li>
                      <li>Accessible only to you through your device</li>
                      <li>Never uploaded to any server or cloud service by our app</li>
                      <li>Included in your iPhone backups (if you have iCloud or iTunes backup enabled)</li>
                      <li>Subject to your device&apos;s security and your own sharing choices</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">6. Children&apos;s Privacy</h4>
                    <p>
                      Since we do not collect any data whatsoever, Flawless Record is safe for users of all ages. We do not knowingly collect personal information from anyone, including children under 13.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">7. Changes to This Privacy Policy</h4>
                    <p>
                      We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Since we don&apos;t collect your contact information, we cannot notify you directly of changes.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">8. Contact Us</h4>
                    <p>
                      If you have any questions about this Privacy Policy or Flawless Record&apos;s privacy practices, please contact us at:
                    </p>
                    <p className="mt-2">
                      Email: <a href="mailto:itsolutionsbiermeier@gmail.com" className="text-purple-600 hover:underline">itsolutionsbiermeier@gmail.com</a>
                    </p>
                  </div>

                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mt-6">
                    <p className="font-semibold text-green-900 mb-2">🔒 Privacy Summary</p>
                    <p className="text-green-800">
                      Flawless Record respects your privacy completely. Everything stays on your device. We don&apos;t see, store, or have access to any of your data or recordings. Period.
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms of Service */}
              <div id="terms" className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-6">Terms of Service</h3>
                <div className="space-y-6 text-gray-700">
                  <p className="text-sm text-gray-500">Last updated: October 2025</p>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h4>
                    <p>
                      By downloading, installing, or using Flawless Record (&quot;the App&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">2. License</h4>
                    <p>
                      Upon purchase, you are granted a non-exclusive, non-transferable, revocable license to use Flawless Record for personal or commercial use on your iOS devices. This license is subject to the Apple Media Services Terms and Conditions.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">3. Permitted Use</h4>
                    <p className="mb-2">You may use Flawless Record to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Record audio for personal or commercial projects</li>
                      <li>Create music samples and recordings</li>
                      <li>Record instruments, vocals, and other audio sources</li>
                      <li>Use recordings in your own creative works</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">4. Prohibited Use</h4>
                    <p className="mb-2">You may NOT:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Reverse engineer, decompile, or disassemble the App</li>
                      <li>Remove or modify any copyright, trademark, or proprietary notices</li>
                      <li>Use the App for any illegal purposes</li>
                      <li>Record audio without proper consent where required by law</li>
                      <li>Redistribute or resell the App</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">5. Ownership of Recordings</h4>
                    <p>
                      You retain full ownership and all rights to any audio recordings you create using Flawless Record. We make no claim to your recordings and have no access to them.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">6. One-Time Purchase</h4>
                    <p>
                      Flawless Record is available for a one-time purchase price of $1.99 USD (price may vary by region). This grants you lifetime access to the App and all future updates. There are no subscriptions, recurring fees, or in-app purchases.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">7. Refunds</h4>
                    <p>
                      All purchases are processed through the Apple App Store and are subject to Apple&apos;s refund policy. We do not process refunds directly. If you believe you are entitled to a refund, please contact Apple Support.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">8. Disclaimer of Warranties</h4>
                    <p>
                      Flawless Record is provided &quot;as is&quot; without warranty of any kind, either express or implied. While we strive to provide a reliable and high-quality app, we do not guarantee that:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>The App will be error-free or uninterrupted</li>
                      <li>All recording quality expectations will be met in every situation</li>
                      <li>The App will be compatible with all future iOS versions</li>
                      <li>All Bluetooth devices will work perfectly with the App</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">9. Limitation of Liability</h4>
                    <p>
                      To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of recordings, loss of data, or loss of profits, arising out of or related to your use of the App.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">10. Recording Consent and Legal Compliance</h4>
                    <p>
                      You are solely responsible for ensuring that your use of Flawless Record complies with all applicable laws, including laws related to recording consent and privacy. In many jurisdictions, you must obtain consent before recording other people. We are not responsible for your compliance with applicable laws.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">11. Updates and Modifications</h4>
                    <p>
                      We reserve the right to update, modify, or discontinue the App at any time. We will make reasonable efforts to maintain functionality and provide updates, but we do not guarantee perpetual support.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">12. Technical Requirements</h4>
                    <p>
                      Flawless Record requires:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>iPhone with iOS 14.0 or later</li>
                      <li>Bluetooth-capable device for monitoring (headphones, speakers, etc.)</li>
                      <li>Sufficient storage space for audio recordings</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">13. Termination</h4>
                    <p>
                      We reserve the right to terminate or restrict your access to the App if you violate these Terms of Service. Upon termination, you must cease all use of the App and delete it from your devices.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">14. Governing Law</h4>
                    <p>
                      These Terms of Service shall be governed by and construed in accordance with the laws of Germany, without regard to its conflict of law provisions.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">15. Changes to Terms</h4>
                    <p>
                      We may update these Terms of Service from time to time. Continued use of the App after changes constitutes acceptance of the new terms.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">16. Contact Information</h4>
                    <p>
                      If you have any questions about these Terms of Service, please contact us at:
                    </p>
                    <p className="mt-2">
                      Markus Biermeier<br />
                      Otto-Kraus-Straße 9<br />
                      90441 Nürnberg, Germany<br />
                      Email: <a href="mailto:itsolutionsbiermeier@gmail.com" className="text-purple-600 hover:underline">itsolutionsbiermeier@gmail.com</a>
                    </p>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mt-6">
                    <p className="font-semibold text-blue-900 mb-2">📋 Terms Summary</p>
                    <p className="text-blue-800">
                      Use Flawless Record responsibly and legally. You own your recordings. One-time $1.99 purchase gives you lifetime access. Be respectful of others&apos; privacy when recording.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
