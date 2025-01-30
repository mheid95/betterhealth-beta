"use client"

import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Cart } from "@/components/cart"

export function Navigation() {
  const handleContact = () => {
    const message = encodeURIComponent("Hello i am interested in Betterhealth Medellin, please give me the menu")
    window.location.href = `https://wa.me/573044772814?text=${message}`
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-green/20 bg-brand-brown/95 backdrop-blur supports-[backdrop-filter]:bg-brand-brown/60">
      <div className="container flex h-16 items-center">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-brand-brown">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/menu" className="text-lg font-medium text-brand-green hover:text-brand-dark">
                  Fresh Meals
                </Link>
                <Link href="/desserts" className="text-lg font-medium text-brand-green hover:text-brand-dark">
                  Desserts
                </Link>
                <Link href="/drinks" className="text-lg font-medium text-brand-green hover:text-brand-dark">
                  Drinks
                </Link>
                <Link href="/fermented-foods" className="text-lg font-medium text-brand-green hover:text-brand-dark">
                  Fermented Foods
                </Link>
                <Link href="/how-we-work" className="text-lg font-medium text-brand-green hover:text-brand-dark">
                  How We Work
                </Link>
                <Link href="/about" className="text-lg font-medium text-brand-green hover:text-brand-dark">
                  About Us
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <div className="mr-4 hidden md:flex flex-1">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold text-brand-green">BETTER HEALTH</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/menu" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Fresh Meals
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/desserts" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Desserts
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/drinks" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Drinks
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/fermented-foods" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Fermented Foods
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/how-we-work" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    How We Work
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Logo (Center) */}
        <div className="flex-1 text-center md:hidden">
          <Link href="/" className="text-lg font-bold text-brand-green">
            BETTER HEALTH
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center justify-end space-x-4">
          <Cart />
          <Button 
            className="bg-brand-green text-white hover:bg-brand-dark"
            onClick={handleContact}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  )
} 