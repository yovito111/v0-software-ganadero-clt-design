"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  MilkIcon as Cow,
  ShoppingCart,
  Truck,
  Baby,
  AlertTriangle,
  Store,
  Users,
  Globe,
  Plus,
  Search,
  Filter,
  Download,
  Bell,
  Settings,
  LogOut,
  Home,
  TrendingUp,
  TrendingDown,
  MapPin,
  QrCode,
  Smartphone,
  Calendar,
  DollarSign,
  Package,
  FileText,
  Eye,
  Edit,
  CheckCircle,
  XCircle,
  Clock,
  ArrowRight,
  Phone,
  Save,
  X,
} from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

// Datos de ejemplo expandidos
const estancias = [
  { id: 1, nombre: "Estancia San Miguel", ubicacion: "Concepción", animales: 1250, hectareas: 2500 },
  { id: 2, nombre: "Estancia La Esperanza", ubicacion: "San Pedro", animales: 890, hectareas: 1800 },
  { id: 3, nombre: "Estancia El Progreso", ubicacion: "Caaguazú", animales: 1450, hectareas: 3200 },
]

const animalesData = [
  {
    id: "PY001234",
    raza: "Brahman",
    edad: "2 años",
    peso: "450 kg",
    estado: "Sano",
    estancia: "San Miguel",
    sexo: "Hembra",
    nacimiento: "2022-03-15",
    madre: "PY000890",
    padre: "PY000456",
  },
  {
    id: "PY001235",
    raza: "Nelore",
    edad: "1.5 años",
    peso: "380 kg",
    estado: "Vacunado",
    estancia: "La Esperanza",
    sexo: "Macho",
    nacimiento: "2022-09-20",
    madre: "PY000891",
    padre: "PY000457",
  },
  {
    id: "PY001236",
    raza: "Angus",
    edad: "3 años",
    peso: "520 kg",
    estado: "Preñada",
    estancia: "El Progreso",
    sexo: "Hembra",
    nacimiento: "2021-06-10",
    madre: "PY000892",
    padre: "PY000458",
  },
  {
    id: "PY001237",
    raza: "Brangus",
    edad: "2.5 años",
    peso: "480 kg",
    estado: "Sano",
    estancia: "San Miguel",
    sexo: "Macho",
    nacimiento: "2021-12-05",
    madre: "PY000893",
    padre: "PY000459",
  },
]

const ventasData = [
  {
    id: "V001",
    fecha: "2024-01-15",
    cliente: "Frigorífico Central",
    animales: 25,
    pesoTotal: "12,500 kg",
    precio: "₲ 125,000,000",
    estado: "Completada",
  },
  {
    id: "V002",
    fecha: "2024-01-20",
    cliente: "Exportadora del Sur",
    animales: 40,
    pesoTotal: "20,000 kg",
    precio: "₲ 200,000,000",
    estado: "Pendiente",
  },
  {
    id: "V003",
    fecha: "2024-01-25",
    cliente: "Carnicería Premium",
    animales: 8,
    pesoTotal: "4,000 kg",
    precio: "₲ 40,000,000",
    estado: "En proceso",
  },
]

const comprasData = [
  {
    id: "C001",
    fecha: "2024-01-10",
    proveedor: "Genética Superior",
    tipo: "Reproductores",
    cantidad: 5,
    precio: "₲ 75,000,000",
    estado: "Recibido",
  },
  {
    id: "C002",
    fecha: "2024-01-18",
    proveedor: "Veterinaria San José",
    tipo: "Medicamentos",
    cantidad: 50,
    precio: "₲ 2,500,000",
    estado: "Pendiente",
  },
  {
    id: "C003",
    fecha: "2024-01-22",
    proveedor: "Alimentos Ganaderos",
    tipo: "Suplementos",
    cantidad: 100,
    precio: "₲ 8,000,000",
    estado: "En tránsito",
  },
]

const trasladosData = [
  {
    id: "T001",
    fecha: "2024-01-12",
    origen: "San Miguel",
    destino: "La Esperanza",
    animales: 15,
    motivo: "Rotación de pasturas",
    estado: "Completado",
  },
  {
    id: "T002",
    fecha: "2024-01-19",
    origen: "El Progreso",
    destino: "San Miguel",
    animales: 8,
    motivo: "Servicio reproductivo",
    estado: "En tránsito",
  },
  {
    id: "T003",
    fecha: "2024-01-26",
    origen: "La Esperanza",
    destino: "El Progreso",
    animales: 12,
    motivo: "Engorde",
    estado: "Programado",
  },
]

const nacimientosData = [
  {
    id: "N001",
    fecha: "2024-01-08",
    madre: "PY001236",
    cria: "PY001240",
    sexo: "Macho",
    peso: "35 kg",
    estado: "Saludable",
    estancia: "El Progreso",
  },
  {
    id: "N002",
    fecha: "2024-01-14",
    madre: "PY001120",
    cria: "PY001241",
    sexo: "Hembra",
    peso: "32 kg",
    estado: "Saludable",
    estancia: "San Miguel",
  },
  {
    id: "N003",
    fecha: "2024-01-21",
    madre: "PY001089",
    cria: "PY001242",
    sexo: "Macho",
    peso: "38 kg",
    estado: "Requiere atención",
    estancia: "La Esperanza",
  },
]

const mortalidadData = [
  {
    id: "M001",
    fecha: "2024-01-05",
    animal: "PY001180",
    causa: "Enfermedad respiratoria",
    edad: "1.5 años",
    estancia: "San Miguel",
    reportado: "Dr. González",
  },
  {
    id: "M002",
    fecha: "2024-01-16",
    animal: "PY001195",
    causa: "Accidente",
    edad: "3 años",
    estancia: "La Esperanza",
    reportado: "Dr. Martínez",
  },
]

const feriasData = [
  {
    id: "F001",
    nombre: "Expo Concepción 2024",
    fecha: "2024-02-15",
    ubicacion: "Concepción",
    animalesInscritos: 12,
    categoria: "Reproductores",
    estado: "Confirmado",
  },
  {
    id: "F002",
    nombre: "Feria Ganadera del Norte",
    fecha: "2024-03-10",
    ubicacion: "Pedro Juan Caballero",
    animalesInscritos: 8,
    categoria: "Novillos",
    estado: "Pendiente",
  },
]

const proveedoresData = [
  {
    id: "P001",
    nombre: "Genética Superior S.A.",
    contacto: "Juan Pérez",
    telefono: "+595 21 123-456",
    email: "juan@genetica.com.py",
    tipo: "Reproductores",
    estado: "Activo",
  },
  {
    id: "P002",
    nombre: "Veterinaria San José",
    contacto: "María González",
    telefono: "+595 21 789-012",
    email: "maria@vetsanjose.com.py",
    tipo: "Medicamentos",
    estado: "Activo",
  },
  {
    id: "P003",
    nombre: "Alimentos Ganaderos",
    contacto: "Carlos Rodríguez",
    telefono: "+595 21 345-678",
    email: "carlos@alimentos.com.py",
    tipo: "Suplementos",
    estado: "Inactivo",
  },
]

const alertas = [
  { tipo: "Vacunación", mensaje: "15 animales requieren vacunación antiaftosa", urgencia: "alta", fecha: "Hoy" },
  { tipo: "Traslado", mensaje: "Traslado pendiente a Estancia El Progreso", urgencia: "media", fecha: "Mañana" },
  { tipo: "Inventario", mensaje: "Stock bajo de medicamentos", urgencia: "baja", fecha: "Esta semana" },
]

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedEstancia, setSelectedEstancia] = useState("todas")
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState("")

  const openModal = (type: string) => {
    setModalType(type)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setModalType("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Cow className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">CLT Ganadero</h1>
            </div>
            <Badge variant="secondary">DEMO</Badge>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Alertas (3)
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            {[
              { id: "dashboard", label: "Dashboard", icon: Home },
              { id: "stock", label: "Stock", icon: BarChart3 },
              { id: "ventas", label: "Ventas", icon: Cow },
              { id: "compras", label: "Compras", icon: ShoppingCart },
              { id: "traslados", label: "Traslados", icon: Truck },
              { id: "nacimientos", label: "Nacimientos", icon: Baby },
              { id: "mortalidad", label: "Mortalidad", icon: AlertTriangle },
              { id: "ferias", label: "Ferias", icon: Store },
              { id: "proveedores", label: "Proveedores", icon: Users },
              { id: "consolidacion", label: "Consolidación", icon: Globe },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Dashboard */}
          {activeTab === "dashboard" && (
            <motion.div {...fadeIn} className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Dashboard Gerencial</h2>
                  <p className="text-gray-600">Vista consolidada de todas las estancias</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Select value={selectedEstancia} onValueChange={setSelectedEstancia}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todas">Todas las estancias</SelectItem>
                      {estancias.map((estancia) => (
                        <SelectItem key={estancia.id} value={estancia.id.toString()}>
                          {estancia.nombre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Exportar
                  </Button>
                </div>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { title: "Total Animales", value: "3,590", change: "+12%", trend: "up", color: "text-green-600" },
                  { title: "Estancias Activas", value: "3", change: "0%", trend: "stable", color: "text-blue-600" },
                  { title: "Ventas del Mes", value: "₲ 450M", change: "+8%", trend: "up", color: "text-green-600" },
                  { title: "Alertas Pendientes", value: "3", change: "-2", trend: "down", color: "text-orange-600" },
                ].map((kpi, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                          <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                        </div>
                        <div className={`flex items-center ${kpi.color}`}>
                          {kpi.trend === "up" && <TrendingUp className="w-4 h-4 mr-1" />}
                          {kpi.trend === "down" && <TrendingDown className="w-4 h-4 mr-1" />}
                          <span className="text-sm font-medium">{kpi.change}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Estancias Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Resumen por Estancia</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {estancias.map((estancia) => (
                      <div key={estancia.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{estancia.nombre}</h3>
                            <p className="text-sm text-gray-600">{estancia.ubicacion}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{estancia.animales.toLocaleString()} animales</p>
                          <p className="text-sm text-gray-600">{estancia.hectareas.toLocaleString()} hectáreas</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Alertas y Animales Recientes */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Bell className="w-5 h-5 mr-2" />
                      Alertas Recientes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {alertas.map((alerta, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 ${
                              alerta.urgencia === "alta"
                                ? "bg-red-500"
                                : alerta.urgencia === "media"
                                  ? "bg-yellow-500"
                                  : "bg-green-500"
                            }`}
                          />
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{alerta.tipo}</p>
                            <p className="text-sm text-gray-600">{alerta.mensaje}</p>
                            <p className="text-xs text-gray-500 mt-1">{alerta.fecha}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Cow className="w-5 h-5 mr-2" />
                      Animales Registrados Recientemente
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {animalesData.slice(0, 4).map((animal) => (
                        <div key={animal.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{animal.id}</p>
                            <p className="text-sm text-gray-600">
                              {animal.raza} • {animal.edad}
                            </p>
                            <p className="text-xs text-gray-500">{animal.estancia}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">{animal.peso}</p>
                            <Badge variant={animal.estado === "Sano" ? "default" : "secondary"} className="text-xs">
                              {animal.estado}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Stock */}
          {activeTab === "stock" && (
            <motion.div {...fadeIn} className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Gestión de Stock</h2>
                  <p className="text-gray-600">Control completo del inventario ganadero</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input placeholder="Buscar animal..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtros
                  </Button>
                  <Button onClick={() => openModal("animal")}>
                    <Plus className="w-4 h-4 mr-2" />
                    Nuevo Animal
                  </Button>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Inventario de Animales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">ID Animal</th>
                          <th className="text-left py-3 px-4">Raza</th>
                          <th className="text-left py-3 px-4">Sexo</th>
                          <th className="text-left py-3 px-4">Edad</th>
                          <th className="text-left py-3 px-4">Peso</th>
                          <th className="text-left py-3 px-4">Estado</th>
                          <th className="text-left py-3 px-4">Estancia</th>
                          <th className="text-left py-3 px-4">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {animalesData.map((animal) => (
                          <tr key={animal.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{animal.id}</td>
                            <td className="py-3 px-4">{animal.raza}</td>
                            <td className="py-3 px-4">{animal.sexo}</td>
                            <td className="py-3 px-4">{animal.edad}</td>
                            <td className="py-3 px-4">{animal.peso}</td>
                            <td className="py-3 px-4">
                              <Badge variant={animal.estado === "Sano" ? "default" : "secondary"}>
                                {animal.estado}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">{animal.estancia}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">
                                  <QrCode className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Ventas */}
          {activeTab === "ventas" && (
            <motion.div {...fadeIn} className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Gestión de Ventas</h2>
                  <p className="text-gray-600">Control de ventas y facturación</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Exportar
                  </Button>
                  <Button onClick={() => openModal("venta")}>
                    <Plus className="w-4 h-4 mr-2" />
                    Nueva Venta
                  </Button>
                </div>
              </div>

              {/* KPIs de Ventas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Ventas del Mes</p>
                        <p className="text-2xl font-bold text-gray-900">₲ 365M</p>
                      </div>
                      <DollarSign className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Animales Vendidos</p>
                        <p className="text-2xl font-bold text-gray-900">73</p>
                      </div>
                      <Cow className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Ventas Pendientes</p>
                        <p className="text-2xl font-bold text-gray-900">2</p>
                      </div>
                      <Clock className="w-8 h-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Historial de Ventas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">ID Venta</th>
                          <th className="text-left py-3 px-4">Fecha</th>
                          <th className="text-left py-3 px-4">Cliente</th>
                          <th className="text-left py-3 px-4">Animales</th>
                          <th className="text-left py-3 px-4">Peso Total</th>
                          <th className="text-left py-3 px-4">Precio</th>
                          <th className="text-left py-3 px-4">Estado</th>
                          <th className="text-left py-3 px-4">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ventasData.map((venta) => (
                          <tr key={venta.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{venta.id}</td>
                            <td className="py-3 px-4">{venta.fecha}</td>
                            <td className="py-3 px-4">{venta.cliente}</td>
                            <td className="py-3 px-4">{venta.animales}</td>
                            <td className="py-3 px-4">{venta.pesoTotal}</td>
                            <td className="py-3 px-4 font-semibold text-green-600">{venta.precio}</td>
                            <td className="py-3 px-4">
                              <Badge
                                variant={
                                  venta.estado === "Completada"
                                    ? "default"
                                    : venta.estado === "Pendiente"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {venta.estado}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <FileText className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Compras */}
          {activeTab === "compras" && (
            <motion.div {...fadeIn} className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Gestión de Compras</h2>
                  <p className="text-gray-600">Registro de adquisiciones</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Exportar
                  </Button>
                  <Button onClick={() => openModal("compra")}>
                    <Plus className="w-4 h-4 mr-2" />
                    Nueva Compra
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Compras del Mes</p>
                        <p className="text-2xl font-bold text-gray-900">₲ 85.5M</p>
                      </div>
                      <ShoppingCart className="w-8 h-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Órdenes Activas</p>
                        <p className="text-2xl font-bold text-gray-900">5</p>
                      </div>
                      <Package className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Pendientes</p>
                        <p className="text-2xl font-bold text-gray-900">2</p>
                      </div>
                      <Clock className="w-8 h-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Historial de Compras</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">ID Compra</th>
                          <th className="text-left py-3 px-4">Fecha</th>
                          <th className="text-left py-3 px-4">Proveedor</th>
                          <th className="text-left py-3 px-4">Tipo</th>
                          <th className="text-left py-3 px-4">Cantidad</th>
                          <th className="text-left py-3 px-4">Precio</th>
                          <th className="text-left py-3 px-4">Estado</th>
                          <th className="text-left py-3 px-4">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comprasData.map((compra) => (
                          <tr key={compra.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{compra.id}</td>
                            <td className="py-3 px-4">{compra.fecha}</td>
                            <td className="py-3 px-4">{compra.proveedor}</td>
                            <td className="py-3 px-4">{compra.tipo}</td>
                            <td className="py-3 px-4">{compra.cantidad}</td>
                            <td className="py-3 px-4 font-semibold text-blue-600">{compra.precio}</td>
                            <td className="py-3 px-4">
                              <Badge
                                variant={
                                  compra.estado === "Recibido"
                                    ? "default"
                                    : compra.estado === "Pendiente"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {compra.estado}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Traslados */}
          {activeTab === "traslados" && (
            <motion.div {...fadeIn} className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Control de Traslados</h2>
                  <p className="text-gray-600">Movimientos entre estancias</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Exportar
                  </Button>
                  <Button onClick={() => openModal("traslado")}>
                    <Plus className="w-4 h-4 mr-2" />
                    Nuevo Traslado
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Traslados del Mes</p>
                        <p className="text-2xl font-bold text-gray-900">12</p>
                      </div>
                      <Truck className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">En Tránsito</p>
                        <p className="text-2xl font-bold text-gray-900">1</p>
                      </div>
                      <ArrowRight className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Programados</p>
                        <p className="text-2xl font-bold text-gray-900">3</p>
                      </div>
                      <Calendar className="w-8 h-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Historial de Traslados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">ID Traslado</th>
                          <th className="text-left py-3 px-4">Fecha</th>
                          <th className="text-left py-3 px-4">Origen</th>
                          <th className="text-left py-3 px-4">Destino</th>
                          <th className="text-left py-3 px-4">Animales</th>
                          <th className="text-left py-3 px-4">Motivo</th>
                          <th className="text-left py-3 px-4">Estado</th>
                          <th className="text-left py-3 px-4">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {trasladosData.map((traslado) => (
                          <tr key={traslado.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{traslado.id}</td>
                            <td className="py-3 px-4">{traslado.fecha}</td>
                            <td className="py-3 px-4">{traslado.origen}</td>
                            <td className="py-3 px-4">{traslado.destino}</td>
                            <td className="py-3 px-4">{traslado.animales}</td>
                            <td className="py-3 px-4">{traslado.motivo}</td>
                            <td className="py-3 px-4">
                              <Badge
                                variant={
                                  traslado.estado === "Completado"
                                    ? "default"
                                    : traslado.estado === "En tránsito"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {traslado.estado}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <MapPin className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Nacimientos */}
          {activeTab === "nacimientos" && (
            <motion.div {...fadeIn} className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Registro de Nacimientos</h2>
                  <p className="text-gray-600">Control de nuevos animales</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Exportar
                  </Button>
                  <Button onClick={() => openModal("nacimiento")}>
                    <Plus className="w-4 h-4 mr-2" />
                    Registrar Nacimiento
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Nacimientos del Mes</p>
                        <p className="text-2xl font-bold text-gray-900">18</p>
                      </div>
                      <Baby className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Tasa de Supervivencia</p>
                        <p className="text-2xl font-bold text-gray-900">94%</p>
                      </div>
                      <CheckCircle className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Requieren Atención</p>
                        <p className="text-2xl font-bold text-gray-900">1</p>
                      </div>
                      <AlertTriangle className="w-8 h-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Registro de Nacimientos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">ID Nacimiento</th>
                          <th className="text-left py-3 px-4">Fecha</th>
                          <th className="text-left py-3 px-4">Madre</th>
                          <th className="text-left py-3 px-4">Cría</th>
                          <th className="text-left py-3 px-4">Sexo</th>
                          <th className="text-left py-3 px-4">Peso</th>
                          <th className="text-left py-3 px-4">Estado</th>
                          <th className="text-left py-3 px-4">Estancia</th>
                          <th className="text-left py-3 px-4">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {nacimientosData.map((nacimiento) => (
                          <tr key={nacimiento.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{nacimiento.id}</td>
                            <td className="py-3 px-4">{nacimiento.fecha}</td>
                            <td className="py-3 px-4">{nacimiento.madre}</td>
                            <td className="py-3 px-4 font-semibold">{nacimiento.cria}</td>
                            <td className="py-3 px-4">{nacimiento.sexo}</td>
                            <td className="py-3 px-4">{nacimiento.peso}</td>
                            <td className="py-3 px-4">
                              <Badge variant={nacimiento.estado === "Saludable" ? "default" : "secondary"}>
                                {nacimiento.estado}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">{nacimiento.estancia}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Mortalidad */}
          {activeTab === "mortalidad" && (
            <motion.div {...fadeIn} className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Control de Mortalidad</h2>
                  <p className="text-gray-600">Registro sanitario y pérdidas</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Exportar
                  </Button>
                  <Button onClick={() => openModal("mortalidad")}>
                    <Plus className="w-4 h-4 mr-2" />
                    Registrar Pérdida
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Mortalidad del Mes</p>
                        <p className="text-2xl font-bold text-gray-900">2</p>
                      </div>
                      <XCircle className="w-8 h-8 text-red-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Tasa de Mortalidad</p>
                        <p className="text-2xl font-bold text-gray-900">0.06%</p>
                      </div>
                      <TrendingDown className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Reportes Pendientes</p>
                        <p className="text-2xl font-bold text-gray-900">0</p>
                      </div>
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Registro de Mortalidad</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">ID Registro</th>
                          <th className="text-left py-3 px-4">Fecha</th>
                          <th className="text-left py-3 px-4">Animal</th>
                          <th className="text-left py-3 px-4">Causa</th>
                          <th className="text-left py-3 px-4">Edad</th>
                          <th className="text-left py-3 px-4">Estancia</th>
                          <th className="text-left py-3 px-4">Reportado por</th>
                          <th className="text-left py-3 px-4">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mortalidadData.map((registro) => (
                          <tr key={registro.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{registro.id}</td>
                            <td className="py-3 px-4">{registro.fecha}</td>
                            <td className="py-3 px-4">{registro.animal}</td>
                            <td className="py-3 px-4">{registro.causa}</td>
                            <td className="py-3 px-4">{registro.edad}</td>
                            <td className="py-3 px-4">{registro.estancia}</td>
                            <td className="py-3 px-4">{registro.reportado}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <FileText className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Ferias */}
          {activeTab === "ferias" && (
            <motion.div {...fadeIn} className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Participación en Ferias</h2>
                  <p className="text-gray-600">Eventos comerciales y exposiciones</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Calendario
                  </Button>
                  <Button onClick={() => openModal("feria")}>
                    <Plus className="w-4 h-4 mr-2" />
                    Nueva Participación
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Ferias Programadas</p>
                        <p className="text-2xl font-bold text-gray-900">2</p>
                      </div>
                      <Store className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Animales Inscritos</p>
                        <p className="text-2xl font-bold text-gray-900">20</p>
                      </div>
                      <Cow className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Próxima Feria</p>
                        <p className="text-2xl font-bold text-gray-900">30 días</p>
                      </div>
                      <Calendar className="w-8 h-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Participaciones en Ferias</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">ID Feria</th>
                          <th className="text-left py-3 px-4">Nombre del Evento</th>
                          <th className="text-left py-3 px-4">Fecha</th>
                          <th className="text-left py-3 px-4">Ubicación</th>
                          <th className="text-left py-3 px-4">Animales</th>
                          <th className="text-left py-3 px-4">Categoría</th>
                          <th className="text-left py-3 px-4">Estado</th>
                          <th className="text-left py-3 px-4">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {feriasData.map((feria) => (
                          <tr key={feria.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{feria.id}</td>
                            <td className="py-3 px-4">{feria.nombre}</td>
                            <td className="py-3 px-4">{feria.fecha}</td>
                            <td className="py-3 px-4">{feria.ubicacion}</td>
                            <td className="py-3 px-4">{feria.animalesInscritos}</td>
                            <td className="py-3 px-4">{feria.categoria}</td>
                            <td className="py-3 px-4">
                              <Badge variant={feria.estado === "Confirmado" ? "default" : "secondary"}>
                                {feria.estado}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Proveedores */}
          {activeTab === "proveedores" && (
            <motion.div {...fadeIn} className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Gestión de Proveedores</h2>
                  <p className="text-gray-600">Directorio de proveedores y contactos</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input placeholder="Buscar proveedor..." className="pl-10 w-64" />
                  </div>
                  <Button onClick={() => openModal("proveedor")}>
                    <Plus className="w-4 h-4 mr-2" />
                    Nuevo Proveedor
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Proveedores Activos</p>
                        <p className="text-2xl font-bold text-gray-900">12</p>
                      </div>
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Órdenes Pendientes</p>
                        <p className="text-2xl font-bold text-gray-900">3</p>
                      </div>
                      <Clock className="w-8 h-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Evaluación Promedio</p>
                        <p className="text-2xl font-bold text-gray-900">4.8</p>
                      </div>
                      <CheckCircle className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Directorio de Proveedores</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">ID</th>
                          <th className="text-left py-3 px-4">Nombre</th>
                          <th className="text-left py-3 px-4">Contacto</th>
                          <th className="text-left py-3 px-4">Teléfono</th>
                          <th className="text-left py-3 px-4">Email</th>
                          <th className="text-left py-3 px-4">Tipo</th>
                          <th className="text-left py-3 px-4">Estado</th>
                          <th className="text-left py-3 px-4">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {proveedoresData.map((proveedor) => (
                          <tr key={proveedor.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{proveedor.id}</td>
                            <td className="py-3 px-4">{proveedor.nombre}</td>
                            <td className="py-3 px-4">{proveedor.contacto}</td>
                            <td className="py-3 px-4">{proveedor.telefono}</td>
                            <td className="py-3 px-4">{proveedor.email}</td>
                            <td className="py-3 px-4">{proveedor.tipo}</td>
                            <td className="py-3 px-4">
                              <Badge variant={proveedor.estado === "Activo" ? "default" : "secondary"}>
                                {proveedor.estado}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Phone className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Consolidación */}
          {activeTab === "consolidacion" && (
            <motion.div {...fadeIn} className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Vista Consolidada</h2>
                  <p className="text-gray-600">Análisis integral multi-estancia</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Select value={selectedEstancia} onValueChange={setSelectedEstancia}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todas">Todas las estancias</SelectItem>
                      {estancias.map((estancia) => (
                        <SelectItem key={estancia.id} value={estancia.id.toString()}>
                          {estancia.nombre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Reporte Consolidado
                  </Button>
                </div>
              </div>

              {/* Métricas Consolidadas */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Animales</p>
                        <p className="text-2xl font-bold text-gray-900">3,590</p>
                        <p className="text-xs text-gray-500">Todas las estancias</p>
                      </div>
                      <Globe className="w-8 h-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Valor Total</p>
                        <p className="text-2xl font-bold text-gray-900">₲ 1.8B</p>
                        <p className="text-xs text-gray-500">Estimado de mercado</p>
                      </div>
                      <DollarSign className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Productividad</p>
                        <p className="text-2xl font-bold text-gray-900">92%</p>
                        <p className="text-xs text-gray-500">Índice general</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Cumplimiento</p>
                        <p className="text-2xl font-bold text-gray-900">100%</p>
                        <p className="text-xs text-gray-500">Normativas SENACSA</p>
                      </div>
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Distribución por Estancia */}
              <Card>
                <CardHeader>
                  <CardTitle>Distribución por Estancia</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {estancias.map((estancia) => (
                      <div key={estancia.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-gray-900">{estancia.nombre}</h3>
                          <Badge variant="outline">{estancia.ubicacion}</Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Animales</p>
                            <p className="font-semibold">{estancia.animales.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Hectáreas</p>
                            <p className="font-semibold">{estancia.hectareas.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Densidad</p>
                            <p className="font-semibold">{(estancia.animales / estancia.hectareas).toFixed(1)} an/ha</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Estado</p>
                            <Badge variant="default" className="text-xs">
                              Activa
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reportes Oficiales */}
              <Card>
                <CardHeader>
                  <CardTitle>Reportes Oficiales Disponibles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { nombre: "Reporte SIAP", descripcion: "Inventario para SENACSA", estado: "Listo" },
                      { nombre: "Reporte SIGOR", descripcion: "Guías de remisión", estado: "Listo" },
                      { nombre: "Reporte COTAs", descripcion: "Certificados sanitarios", estado: "Pendiente" },
                      { nombre: "Inventario Consolidado", descripcion: "Resumen general", estado: "Listo" },
                    ].map((reporte, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">{reporte.nombre}</h4>
                          <p className="text-sm text-gray-600">{reporte.descripcion}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={reporte.estado === "Listo" ? "default" : "secondary"}>{reporte.estado}</Badge>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </main>
      </div>

      {/* App Móvil Demo */}
      <div className="fixed bottom-6 right-6">
        <Card className="w-80 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-sm">
              <Smartphone className="w-4 h-4 mr-2" />
              App Móvil - Vista Previa
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="bg-gray-900 rounded-lg p-4 text-white">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs">CLT Ganadero Mobile</span>
                <Badge variant="secondary" className="text-xs">
                  Offline Ready
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <QrCode className="w-4 h-4" />
                  <span className="text-sm">Escanear QR/RFID</span>
                </div>
                <div className="text-xs text-gray-300">Funciona sin conexión a internet</div>
                <div className="text-xs text-gray-300">Sincronización automática</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="capitalize">Nuevo {modalType}</CardTitle>
                <Button variant="ghost" size="sm" onClick={closeModal}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modalType === "animal" && (
                  <>
                    <Input placeholder="ID del animal" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar raza" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="brahman">Brahman</SelectItem>
                        <SelectItem value="nelore">Nelore</SelectItem>
                        <SelectItem value="angus">Angus</SelectItem>
                        <SelectItem value="brangus">Brangus</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sexo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="macho">Macho</SelectItem>
                        <SelectItem value="hembra">Hembra</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Peso (kg)" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Estancia" />
                      </SelectTrigger>
                      <SelectContent>
                        {estancias.map((estancia) => (
                          <SelectItem key={estancia.id} value={estancia.nombre}>
                            {estancia.nombre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </>
                )}

                {modalType === "venta" && (
                  <>
                    <Input placeholder="Cliente" />
                    <Input placeholder="Número de animales" />
                    <Input placeholder="Precio total" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pendiente">Pendiente</SelectItem>
                        <SelectItem value="proceso">En proceso</SelectItem>
                        <SelectItem value="completada">Completada</SelectItem>
                      </SelectContent>
                    </Select>
                  </>
                )}

                {modalType === "compra" && (
                  <>
                    <Input placeholder="Proveedor" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Tipo de compra" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reproductores">Reproductores</SelectItem>
                        <SelectItem value="medicamentos">Medicamentos</SelectItem>
                        <SelectItem value="suplementos">Suplementos</SelectItem>
                        <SelectItem value="equipos">Equipos</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Cantidad" />
                    <Input placeholder="Precio" />
                  </>
                )}

                {modalType === "traslado" && (
                  <>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Estancia origen" />
                      </SelectTrigger>
                      <SelectContent>
                        {estancias.map((estancia) => (
                          <SelectItem key={estancia.id} value={estancia.nombre}>
                            {estancia.nombre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Estancia destino" />
                      </SelectTrigger>
                      <SelectContent>
                        {estancias.map((estancia) => (
                          <SelectItem key={estancia.id} value={estancia.nombre}>
                            {estancia.nombre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input placeholder="Número de animales" />
                    <Input placeholder="Motivo del traslado" />
                  </>
                )}

                {modalType === "nacimiento" && (
                  <>
                    <Input placeholder="ID de la madre" />
                    <Input placeholder="ID de la cría" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sexo de la cría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="macho">Macho</SelectItem>
                        <SelectItem value="hembra">Hembra</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Peso al nacer (kg)" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Estancia" />
                      </SelectTrigger>
                      <SelectContent>
                        {estancias.map((estancia) => (
                          <SelectItem key={estancia.id} value={estancia.nombre}>
                            {estancia.nombre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </>
                )}

                {modalType === "mortalidad" && (
                  <>
                    <Input placeholder="ID del animal" />
                    <Input placeholder="Causa de la muerte" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Estancia" />
                      </SelectTrigger>
                      <SelectContent>
                        {estancias.map((estancia) => (
                          <SelectItem key={estancia.id} value={estancia.nombre}>
                            {estancia.nombre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Observaciones adicionales" />
                  </>
                )}

                {modalType === "feria" && (
                  <>
                    <Input placeholder="Nombre del evento" />
                    <Input placeholder="Ubicación" />
                    <Input type="date" placeholder="Fecha" />
                    <Input placeholder="Número de animales a inscribir" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reproductores">Reproductores</SelectItem>
                        <SelectItem value="novillos">Novillos</SelectItem>
                        <SelectItem value="vaquillonas">Vaquillonas</SelectItem>
                        <SelectItem value="toros">Toros</SelectItem>
                      </SelectContent>
                    </Select>
                  </>
                )}

                {modalType === "proveedor" && (
                  <>
                    <Input placeholder="Nombre de la empresa" />
                    <Input placeholder="Persona de contacto" />
                    <Input placeholder="Teléfono" />
                    <Input placeholder="Email" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Tipo de proveedor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reproductores">Reproductores</SelectItem>
                        <SelectItem value="medicamentos">Medicamentos</SelectItem>
                        <SelectItem value="suplementos">Suplementos</SelectItem>
                        <SelectItem value="equipos">Equipos</SelectItem>
                        <SelectItem value="servicios">Servicios</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Notas adicionales" />
                  </>
                )}

                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={closeModal}>
                    Cancelar
                  </Button>
                  <Button onClick={closeModal}>
                    <Save className="w-4 h-4 mr-2" />
                    Guardar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
