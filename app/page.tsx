"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ChevronRight,
  X,
  CheckCircle,
  BarChart3,
  MilkIcon as Cow,
  ShoppingCart,
  Truck,
  Baby,
  AlertTriangle,
  Store,
  Users,
  Globe,
  Smartphone,
  Wifi,
  TrendingUp,
  Shield,
  MapPin,
  Mail,
  Phone,
  Building,
  Play,
} from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const modules = [
  { icon: BarChart3, title: "Stock", description: "Control completo del inventario ganadero" },
  { icon: Cow, title: "Ventas", description: "Gestión de ventas y facturación" },
  { icon: ShoppingCart, title: "Compras", description: "Registro de adquisiciones" },
  { icon: Truck, title: "Traslados", description: "Control de movimientos entre estancias" },
  { icon: Baby, title: "Nacimientos", description: "Registro de nuevos animales" },
  { icon: AlertTriangle, title: "Mortalidad", description: "Control sanitario y pérdidas" },
  { icon: Store, title: "Ferias", description: "Participación en eventos comerciales" },
  { icon: Users, title: "Proveedores", description: "Gestión de proveedores" },
  { icon: Globe, title: "Consolidación", description: "Vista integral multi-estancia" },
]

const roadmapItems = [
  { phase: "Fase 1", title: "MVP", year: "2025", status: "active", color: "bg-green-500" },
  { phase: "Fase 2", title: "Integración SIGOR", year: "2025", status: "upcoming", color: "bg-blue-500" },
  { phase: "Fase 3", title: "IA predictiva sanitaria", year: "2026", status: "future", color: "bg-purple-500" },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transformando la ganadería paraguaya con{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                tecnología
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-purple-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sistema integral para trazabilidad, stock, sanidad y gestión multi-estancia
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/demo">
                <Button
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-8 py-4 rounded-full font-semibold"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Ver Demo Interactiva
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-4 rounded-full font-semibold bg-transparent"
              >
                Solicitar demo personalizada
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </section>

      {/* Problema del mercado */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">La ganadería necesita modernización</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Las exigencias de SENACSA y la nueva Ley 7221/2023 requieren trazabilidad individual obligatoria
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: X, title: "Pérdidas por falta de control", color: "text-red-500" },
              { icon: X, title: "Registro manual ineficiente", color: "text-red-500" },
              { icon: X, title: "Riesgo de incumplimiento legal", color: "text-red-500" },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 text-center border-red-200 hover:border-red-300 transition-colors">
                  <CardContent className="pt-6">
                    <item.icon className={`w-12 h-12 mx-auto mb-4 ${item.color}`} />
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nuestra solución */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sistema Ganadero CLT</h2>
            <p className="text-xl text-gray-600">Módulos integrados para una gestión completa</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {modules.map((module, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer border-purple-200 hover:border-purple-400">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <module.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h3>
                    <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {module.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para ver el sistema en acción?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Explora nuestra demo interactiva y descubre cómo CLT Ganadero puede transformar tu operación
            </p>
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-8 py-4 rounded-full font-semibold"
              >
                <Play className="mr-2 w-5 h-5" />
                Acceder a la Demo
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Funcionalidades clave */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Funcionalidades clave</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: BarChart3,
                title: "Dashboard gerencial multi-estancia",
                description: "Vista consolidada de todas tus operaciones en tiempo real",
              },
              {
                icon: Smartphone,
                title: "App móvil offline con lector QR/RFID",
                description: "Funciona sin internet, sincroniza automáticamente",
              },
              {
                icon: Wifi,
                title: "Integración con SIAP, SIGOR y COTAs",
                description: "Cumplimiento automático de normativas oficiales",
              },
              {
                icon: Shield,
                title: "Alertas automáticas y reportes oficiales",
                description: "Notificaciones inteligentes y documentos listos para presentar",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impacto para el productor */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Impacto para el productor</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { value: "+40%", label: "eficiencia administrativa", icon: TrendingUp },
              { value: "-90%", label: "errores en stock", icon: CheckCircle },
              { value: "100%", label: "trazabilidad", icon: Shield },
              { value: "✓", label: "Compatible con exportación premium", icon: Globe },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-center">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-purple-100">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Roadmap de desarrollo</h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

              {roadmapItems.map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="relative flex items-center mb-12">
                  <div
                    className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg z-10`}
                  >
                    {index + 1}
                  </div>
                  <div className="ml-8">
                    <Badge variant="outline" className="mb-2">
                      {item.phase}
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre CLT */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Sobre CLT S.A.</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Con años de experiencia en innovación tecnológica aplicada a logística y agro, CLT S.A. se posiciona como
              líder en soluciones digitales para el sector productivo paraguayo. Nuestro compromiso es transformar la
              gestión tradicional mediante tecnología de vanguardia.
            </p>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Building className="w-16 h-16 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contacto</h2>
            <p className="text-xl text-gray-600">Solicita una demostración personalizada</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="p-8">
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div>
                      <Input placeholder="Nombre completo" className="h-12" />
                    </div>
                    <div>
                      <Input placeholder="Empresa" className="h-12" />
                    </div>
                    <div>
                      <Input placeholder="Teléfono" className="h-12" />
                    </div>
                    <div>
                      <Textarea placeholder="Comentarios" rows={4} />
                    </div>
                    <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Solicitar contacto comercial
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cobertura Nacional</h3>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-lg">
                  <MapPin className="w-12 h-12 text-purple-600 mb-4" />
                  <p className="text-gray-700">
                    Servicio disponible en todo el territorio paraguayo con soporte técnico especializado.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">info@clt.com.py</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">+595 21 XXX-XXXX</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Building className="w-8 h-8 mr-2" />
              <span className="text-2xl font-bold">CLT S.A.</span>
            </div>
            <p className="text-purple-200 mb-4">Transformando la ganadería paraguaya con tecnología</p>
            <p className="text-sm text-purple-300">© 2024 CLT S.A. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
