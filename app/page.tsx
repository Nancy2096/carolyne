import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight, Check, Phone, Mail, MapPin, Linkedin, Instagram, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className=" flex items-center gap-2 relative ">
             {/* <span className="text-xl font-semibold text-[#1F3C88]">Carolyn Martinez</span>*/}
            <div className="relative h-[50px] w-[250px]">
              <Image
                src="/logo-nuevo.png"
                alt="Carolyn Martinez"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#1F3C88]"
            >
              Sobre Mí
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#1F3C88]"
            >
              Servicios
            </Link>
            <Link
              href="#methodology"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#1F3C88]"
            >
              Metodología
            </Link>
            <Link
              href="#success"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#1F3C88]"
            >
              Casos de Éxito
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#1F3C88]"
            >
              FAQ
            </Link>
          </nav>
          <div>
            <Button className="bg-[#1F3C88] hover:bg-[#1F3C88]/90">
              <Link href="#contact">Contacto</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F3C88]/10 to-[#EAD3CF]/10 z-0"></div>
          <div className="container relative z-10 grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F3C88]">
                Transformando el Real Estate con Estrategias Comerciales de Élite
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
                Consultoría especializada para potenciar tus resultados en el mercado inmobiliario
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#1F3C88] hover:bg-[#1F3C88]/90">
                  <Link href="#contact" className="flex items-center">
                    Agenda tu consultoría estratégica
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#1F3C88] text-[#1F3C88]">
                  <Link href="#services" className="flex items-center">
                    Conoce mis servicios
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/carolyn-inicio.jpg?height=500&width=650"
                alt="Carolyn Martinez"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-[#F5F5F7]">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/sobre-carolyn.jpg?height=1000&width=800"
                  alt="Carolyn Martinez"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1F3C88]">Sobre Carolyn</h2>
                <p className="text-lg text-muted-foreground">
                Ejecutiva con más de <b>15 años de experiencia en el sector inmobiliario</b>, especializada en el desarrollo de estrategias 
                comerciales orientadas a la optimización de resultados, la transformación de equipos de ventas y la generación de valor sostenible.
                </p>
                <p className="text-lg text-muted-foreground">
                He trabajado con desarrolladoras, constructoras, firmas inmobiliarias y asesores independientes, aportando soluciones estratégicas alineadas 
                con los objetivos del negocio. 
                </p>
                <p className="text-lg text-muted-foreground">
                Mi enfoque combina un profundo conocimiento del mercado con metodologías comerciales probadas, logrando acelerar 
                procesos de venta, fortalecer la relación con el cliente e impulsar la competitividad en entornos altamente dinámicos.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                 
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <Check className="h-5 w-5 text-[#1F3C88]" />
                    <span className="text-sm font-medium">Orientación a resultados</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <Check className="h-5 w-5 text-[#1F3C88]" />
                    <span className="text-sm font-medium">Procesos de transformación comercial</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <Check className="h-5 w-5 text-[#1F3C88]" />
                    <span className="text-sm font-medium">Visión estratégica</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <Check className="h-5 w-5 text-[#1F3C88]" />
                    <span className="text-sm font-medium">Formación de equipos de alto rendimiento</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <Check className="h-5 w-5 text-[#1F3C88]" />
                    <span className="text-sm font-medium">Herramientas digitales aplicadas a ventas</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <Check className="h-5 w-5 text-[#1F3C88]" />
                    <span className="text-sm font-medium">Capacidad de liderazgo</span>
                  </div>
                </div>
                {/*  
                <blockquote className="border-l-4 border-[#EAD3CF] pl-4 italic text-lg">
                  "El éxito en el Real Estate no es casualidad, es el resultado de estrategias comerciales precisas y
                  equipos bien entrenados."
                </blockquote>
                */}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1F3C88]">Servicios</h2>
              <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                Soluciones personalizadas para potenciar tu negocio inmobiliario y maximizar tus resultados comerciales.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#1F3C88]/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#1F3C88]"
                    >
                      <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                      <path d="m13 13 6 6" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl text-[#1F3C88]">Estrategia Comercial</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Desarrollamos planes personalizados para maximizar tus oportunidades de venta y optimizar tus
                    recursos comerciales.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#1F3C88]/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#1F3C88]"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl text-[#1F3C88]">Creación de Equipos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    ¡Formamos y estructuramos equipos comerciales de alto rendimiento alineados con tus objetivos de
                    negocio.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#1F3C88]/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#1F3C88]"
                    >
                      <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6 6 6 0 0 0 6 6" />
                      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl text-[#1F3C88]">Entrenamientos y Capacitación</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Programas de formación especializados para potenciar las habilidades de venta y negociación de tu
                    equipo.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#1F3C88]/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#1F3C88]"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl text-[#1F3C88]">Compra de Medios</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Estrategias de inversión publicitaria optimizada para captar clientes cualificados en el sector
                    inmobiliario.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#1F3C88]/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#1F3C88]"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl text-[#1F3C88]">Estudios de Mercado</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Análisis detallados del sector para identificar oportunidades y anticipar tendencias del mercado
                    inmobiliario.
                  </CardDescription>
                </CardContent>
              </Card>
              <div className="flex items-center justify-center">
                <div className="text-center p-8 bg-[#EAD3CF]/20 rounded-xl">
                  <h3 className="text-xl font-medium text-[#1F3C88] mb-4">¿Necesitas un servicio personalizado?</h3>
                  <Button className="bg-[#1F3C88] hover:bg-[#1F3C88]/90">
                    <Link href="#contact" className="flex items-center">
                      Contáctame
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section id="methodology" className="py-20 bg-[#F5F5F7]">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1F3C88]">Metodología de Trabajo</h2>
              <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                Un proceso estructurado y eficiente para transformar tu negocio inmobiliario.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-[#1F3C88]/20 hidden md:block"></div>
              <div className="space-y-12 relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right space-y-4 md:pr-12">
                    <div className="hidden md:flex justify-end">
                      <div className="w-10 h-10 rounded-full bg-[#1F3C88] flex items-center justify-center text-white font-bold absolute right-[-20px]">
                        1
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1F3C88]">Diagnóstico</h3>
                    <p className="text-muted-foreground">
                      Evaluamos tu situación actual, identificamos oportunidades y definimos objetivos claros y
                      medibles.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="md:hidden w-10 h-10 rounded-full bg-[#1F3C88] flex items-center justify-center text-white font-bold mb-4">
                      1
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#1F3C88] mt-0.5" />
                        <span>Análisis de procesos comerciales actuales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#1F3C88] mt-0.5" />
                        <span>Evaluación de equipos y recursos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#1F3C88] mt-0.5" />
                        <span>Identificación de áreas de mejora</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="bg-white p-6 rounded-xl shadow-md md:order-first">
                    <div className="md:hidden w-10 h-10 rounded-full bg-[#1F3C88] flex items-center justify-center text-white font-bold mb-4">
                      2
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#1F3C88] mt-0.5" />
                        <span>Diseño de estrategias personalizadas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#1F3C88] mt-0.5" />
                        <span>Planificación de recursos y tiempos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#1F3C88] mt-0.5" />
                        <span>Definición de KPIs y métricas de éxito</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4 md:pl-12">
                    <div className="hidden md:block">
                      <div className="w-10 h-10 rounded-full bg-[#1F3C88] flex items-center justify-center text-white font-bold absolute left-[-20px]">
                        2
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1F3C88]">Estrategia</h3>
                    <p className="text-muted-foreground">
                      Desarrollamos un plan de acción personalizado con estrategias específicas para tu negocio
                      inmobiliario.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right space-y-4 md:pr-12">
                    <div className="hidden md:flex justify-end">
                      <div className="w-10 h-10 rounded-full bg-[#1F3C88] flex items-center justify-center text-white font-bold absolute right-[-20px]">
                        3
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1F3C88]">Implementación</h3>
                    <p className="text-muted-foreground">
                      Ejecutamos las estrategias diseñadas con un acompañamiento constante para asegurar resultados
                      óptimos.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="md:hidden w-10 h-10 rounded-full bg-[#1F3C88] flex items-center justify-center text-white font-bold mb-4">
                      3
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#1F3C88] mt-0.5" />
                        <span>Ejecución de estrategias comerciales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#1F3C88] mt-0.5" />
                        <span>Capacitación y entrenamiento de equipos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#1F3C88] mt-0.5" />
                        <span>Seguimiento y ajustes en tiempo real</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="bg-white p-6 rounded-xl shadow-md md:order-first">
                    <div className="md:hidden w-10 h-10 rounded-full bg-[#1F3C88] flex items-center justify-center text-white font-bold mb-4">
                      4
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#1F3C88] mt-0.5" />
                        <span>Análisis de resultados obtenidos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#1F3C88] mt-0.5" />
                        <span>Optimización de estrategias</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#1F3C88] mt-0.5" />
                        <span>Planificación de crecimiento sostenible</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4 md:pl-12">
                    <div className="hidden md:block">
                      <div className="w-10 h-10 rounded-full bg-[#1F3C88] flex items-center justify-center text-white font-bold absolute left-[-20px]">
                        4
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1F3C88]">Evaluación y Mejora</h3>
                    <p className="text-muted-foreground">
                      Medimos resultados, optimizamos procesos y establecemos bases para un crecimiento sostenible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Cases Section */}
        <section id="success" className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1F3C88]">Casos de Éxito</h2>
              <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                Resultados reales que han transformado negocios inmobiliarios.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image src="/logo-ubk.jpg?height=100&width=100" alt="Cliente" fill className="object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">UBK</CardTitle>
                     {/*  <CardDescription>María Rodríguez, Directora Comercial</CardDescription>*/}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                  Participación en el diseño y ejecución de estrategias de marketing, seleccionando canales adecuados conforme a la 
                  dirección estratégica del negocio, lo que permitió una mayor visibilidad y alineación con objetivos comerciales.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-[#1F3C88]">
                    <span>Resultados:</span>
                    <span className="bg-[#1F3C88]/10 px-2 py-1 rounded-full">+45% Ventas</span>
                    <span className="bg-[#1F3C88]/10 px-2 py-1 rounded-full">-20% Tiempo de cierre</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image src="/logo-frank.jpg?height=100&width=100" alt="Cliente" fill className="object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg"> Frank Ruiz Realty Group</CardTitle>
                    {/*  <CardDescription>Carlos Mendoza, CEO</CardDescription>*/}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                   Apoyo en la estrategia comercial para una de las firmas inmobiliarias líderes en Playa del Carmen, Tulum, Cancún y Puerto Morelos.
                   Se brindó asesoría en posicionamiento, enfoque comercial y alineación de procesos para reforzar su liderazgo en el mercado del sureste mexicano.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-[#1F3C88]">
                    <span>Resultados:</span>
                    <span className="bg-[#1F3C88]/10 px-2 py-1 rounded-full">+60% Conversión</span>
                    <span className="bg-[#1F3C88]/10 px-2 py-1 rounded-full">-30% Rotación</span>
                  </div>
                </CardContent>
              </Card>
              {/*
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image src="/testimonio3.jpeg?height=100&width=100" alt="Cliente" fill className="object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Desarrollos Urbanos S.A.</CardTitle>
                      <CardDescription>Jorge Gómez, Director de Marketing</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "La estrategia de medios diseñada por Carolyn revolucionó nuestra forma de captar clientes.
                    Optimizamos nuestra inversión publicitaria y aumentamos las leads cualificados en un 75%."
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-[#1F3C88]">
                    <span>Resultados:</span>
                    <span className="bg-[#1F3C88]/10 px-2 py-1 rounded-full">+75% Leads</span>
                    <span className="bg-[#1F3C88]/10 px-2 py-1 rounded-full">+35% ROI</span>
                  </div>
                </CardContent>
              </Card>
              */}
            </div>
            <div className="mt-16 flex justify-center">
              <div className="bg-[#F5F5F7] p-8 rounded-xl max-w-3xl">
                <h3 className="text-2xl font-bold text-[#1F3C88] mb-4 text-center">
                  Credibilidad respaldada por los mejores
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                  <div className="grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src="/empresa1.jpeg?height=60&width=120"
                      alt="Logo empresa"
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src="/empresa2.jpeg?height=60&width=120"
                      alt="Logo empresa"
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src="/empresa3.jpeg?height=60&width=120"
                      alt="Logo empresa"
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src="/empresa4.jpeg?height=60&width=120"
                      alt="Logo empresa"
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-[#F5F5F7]">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1F3C88]">
                ¿Por qué elegir a Carolyn Martinez?
              </h2>
              <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                Experiencia, resultados y un enfoque personalizado que marca la diferencia.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-[#1F3C88]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#1F3C88]"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1F3C88] mb-2">Experiencia Comprobada</h3>
                <p className="text-muted-foreground">
                  Más de 15 años transformando negocios inmobiliarios con estrategias comerciales efectivas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-[#1F3C88]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#1F3C88]"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1F3C88] mb-2">Enfoque Personalizado</h3>
                <p className="text-muted-foreground">
                  Estrategias diseñadas específicamente para tu negocio, no soluciones genéricas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-[#1F3C88]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#1F3C88]"
                  >
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="m4.93 4.93 2.83 2.83" />
                    <path d="m16.24 16.24 2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="m4.93 19.07 2.83-2.83" />
                    <path d="m16.24 7.76 2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1F3C88] mb-2">Resultados Medibles</h3>
                <p className="text-muted-foreground">
                  Enfoque en KPIs claros y resultados tangibles que impactan directamente en tu negocio.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-[#1F3C88]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#1F3C88]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1F3C88] mb-2">Acompañamiento Continuo</h3>
                <p className="text-muted-foreground">
                  Soporte constante durante todo el proceso para asegurar la implementación exitosa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1F3C88]">Preguntas Frecuentes</h2>
              <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                Respuestas a las dudas más comunes sobre mis servicios de consultoría.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">
                    ¿Cómo funciona el proceso de consultoría?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    El proceso comienza con una evaluación inicial de tu negocio inmobiliario para identificar áreas de
                    mejora. Luego, desarrollamos estrategias personalizadas, implementamos las soluciones y realizamos
                    un seguimiento continuo para asegurar resultados óptimos.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">
                    ¿Cuánto tiempo dura el proceso de consultoría?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    La duración varía según las necesidades específicas de cada cliente. Generalmente, los proyectos
                    iniciales tienen una duración de 3 a 6 meses para implementar cambios significativos, seguidos de un
                    acompañamiento continuo para asegurar resultados sostenibles.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">
                    ¿Trabajas con empresas de cualquier tamaño?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sí, trabajo con empresas inmobiliarias de todos los tamaños, desde pequeñas agencias hasta grandes
                    desarrolladoras. Las estrategias se adaptan específicamente a las necesidades y recursos de cada
                    cliente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">¿Qué resultados puedo esperar?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Los clientes suelen experimentar mejoras significativas en sus indicadores comerciales clave, como
                    aumento en ventas (30-60% en promedio), reducción en tiempos de cierre, mejora en la calidad de
                    leads y optimización de la inversión publicitaria.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-medium">
                    ¿Ofreces servicios de capacitación para equipos?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sí, ofrezco programas de capacitación especializados para equipos comerciales en el sector
                    inmobiliario. Estos programas pueden ser parte de un proyecto de consultoría integral o contratarse
                    de manera independiente según tus necesidades.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 bg-[#EAD3CF]/20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1F3C88]">
                  Agenda tu Consultoría Estratégica
                </h2>
                <p className="text-lg text-muted-foreground">
                  Completa el formulario y me pondré en contacto contigo para discutir cómo puedo ayudarte a potenciar
                  tu negocio inmobiliario.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1F3C88] flex items-center justify-center text-white shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Teléfono</h3>
                      <p className="text-muted-foreground">55 4497 0363</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1F3C88] flex items-center justify-center text-white shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">hablemos@consultoria-inmobiiaria.com </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1F3C88] flex items-center justify-center text-white shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Ubicación</h3>
                      <p className="text-muted-foreground">Ciudad de México, México</p>
                      </div>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="font-medium mb-2">Sígueme en:</p>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#1F3C88] flex items-center justify-center text-white hover:bg-[#1F3C88]/90 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#1F3C88] flex items-center justify-center text-white hover:bg-[#1F3C88]/90 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </div>
                  <br/>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9570.297974535455!2d-99.13183423651526!3d19.351282324205627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e1!3m2!1ses-419!2smx!4v1748933080020!5m2!1ses-419!2smx" width="600" height="180" loading="lazy"></iframe>
                    
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input id="company" placeholder="Nombre de tu empresa" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" placeholder="Tu número de teléfono" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Servicio de interés</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="estrategia">Estrategia Comercial</SelectItem>
                        <SelectItem value="equipos">Creación de Equipos</SelectItem>
                        <SelectItem value="capacitacion">Entrenamientos y Capacitación</SelectItem>
                        <SelectItem value="medios">Compra de Medios</SelectItem>
                        <SelectItem value="estudios">Estudios de Mercado</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje (opcional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntame sobre tu proyecto o necesidades específicas"
                      rows={4}
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="privacy" className="mt-1" />
                    <Label htmlFor="privacy" className="text-sm text-muted-foreground font-normal">
                      Acepto la política de privacidad y el tratamiento de mis datos para ser contactado.
                    </Label>
                  </div>
                  <div className="pt-2">
                    <Button type="submit" className="w-full bg-[#1F3C88] hover:bg-[#1F3C88]/90">
                      Agendar mi consultoría estratégica
                    </Button>
                    <div className="text-center mt-4">
                      <span className="text-sm text-muted-foreground">¿Prefieres una llamada? </span>
                      <Link href="#" className="text-sm font-medium text-[#1F3C88] hover:underline">
                        Solicitar que me contacten
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Credibility */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="text-center mb-8">
              <h3 className="text-xl font-medium text-[#1F3C88]">Reconocida por las mejores instituciones</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="/instituto1.jpeg?height=40&width=120"
                  alt="Logo institución"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="/instituto2.jpeg?height=40&width=120"
                  alt="Logo institución"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="/instituto4.jpeg?height=40&width=120"
                  alt="Logo institución"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="/instituto6.jpeg?height=40&width=120"
                  alt="Logo institución"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="/instituto5.jpeg?height=40&width=120"
                  alt="Logo institución"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-[#1F3C88]">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Transforma tu negocio inmobiliario hoy
              </h2>
              <p className="text-lg text-white/80">
                Agenda una consultoría estratégica y descubre cómo potenciar tus resultados comerciales.
              </p>
              <div className="pt-4">
                <Button size="lg" className="bg-white text-[#1F3C88] hover:bg-white/90">
                  <Link href="#contact" className="flex items-center">
                    Agendar ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-sm text-white/60 mt-4">Solo 3 consultorías disponibles esta semana</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#F5F5F7] py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
              <div className="relative h-[50px] w-[100px]">
              <Image
                src="/logo-footer.png"
                alt="Carolyn Martinez"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
               
              </div>
              <p className="text-muted-foreground mb-4">
                Consultoría especializada en estrategias comerciales para el sector inmobiliario.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-[#1F3C88]">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-[#1F3C88]">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Enlaces rápidos</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#about" className="text-muted-foreground hover:text-[#1F3C88]">
                  Sobre Mí
                </Link>
                <Link href="#services" className="text-muted-foreground hover:text-[#1F3C88]">
                  Servicios
                </Link>
                <Link href="#methodology" className="text-muted-foreground hover:text-[#1F3C88]">
                  Metodología
                </Link>
                <Link href="#success" className="text-muted-foreground hover:text-[#1F3C88]">
                  Casos de Éxito
                </Link>
                <Link href="#contact" className="text-muted-foreground hover:text-[#1F3C88]">
                  Contacto
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contacto</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>55 4497 0363</span>
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>hablemos@consultoria-inmobiiaria.com</span>
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Ciudad de México, México</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Carolyn Martinez. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-[#1F3C88]">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-[#1F3C88]">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="https://wa.me/15551234567?text=Hola%20Carolyn,%20estoy%20interesado/a%20en%20tus%20servicios%20de%20consultoría%20en%20Real%20Estate..."
          target="_blank"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1F3C88] text-white shadow-lg hover:bg-[#1F3C88]/90 transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">WhatsApp</span>
        </Link>
      </div>
    </div>
  )
}
