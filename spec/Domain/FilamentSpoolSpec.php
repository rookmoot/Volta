<?php
/**
 * This file is part of the Volta Project.
 *
 * Copyright (c) 2018 - 2019. AzuyaLabs
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Sacha Telgenhof <me@sachatelgenhof.com>
 */

declare(strict_types=1);

namespace spec\Volta\Domain;

use Money\Currency;
use Money\Money;
use PhpSpec\ObjectBehavior;
use PhpUnitsOfMeasure\PhysicalQuantity\Mass;
use Volta\Domain\FilamentSpool;
use Volta\Domain\Manufacturer;
use Volta\Domain\ValueObject\FilamentSpoolId;
use Volta\Domain\ValueObject\Manufacturer\ManufacturerId;
use Volta\Domain\ValueObject\Manufacturer\ManufacturerName;

class FilamentSpoolSpec extends ObjectBehavior
{
    public function let(): void
    {
        $this->beConstructedWith(
            new FilamentSpoolId(),
            new Manufacturer(
                new ManufacturerId(),
                new ManufacturerName('ABC Plastics')
            ),
            'Midnight Blue'
        );
    }

    public function it_is_initializable(): void
    {
        $this->shouldHaveType(FilamentSpool::class);
    }

    public function it_has_an_identifier(): void
    {
        $this->getId()->shouldReturnAnInstanceOf(FilamentSpoolId::class);
    }

    public function it_has_a_name(): void
    {
        $this->getName()->shouldBe('Midnight Blue');
    }

    public function it_can_update_the_name(): void
    {
        $newName = 'PLA Old Purple';
        $this->setName($newName);
        $this->getName()->shouldBe($newName);
    }

    public function it_has_a_purchase_price(): void
    {
        $this->getPurchasePrice()->shouldReturnAnInstanceOf(Money::class);
    }

    public function it_can_update_the_purchase_price(): void
    {
        $newPrice = new Money(4500, new Currency('JPY'));

        $this->setPurchasePrice($newPrice);
        $this->getPurchasePrice()->shouldBe($newPrice);
    }

    public function it_has_a_manufacturer(): void
    {
        $this->getManufacturer()->shouldReturnAnInstanceOf(Manufacturer::class);
    }

    public function it_can_update_manufacturer(Manufacturer $manufacturer): void
    {
        $this->setManufacturer($manufacturer);
        $this->getManufacturer()->shouldBe($manufacturer);
    }

    public function it_has_a_weight(): void
    {
        $this->getWeight()->shouldReturnAnInstanceOf(Mass::class);
    }

    public function it_can_update_weight(Mass $weight): void
    {
        $this->setWeight($weight);
        $this->getWeight()->shouldBe($weight);
    }

    public function it_has_a_price_per_weight()
    {
        $price  = new Money(4500, new Currency('JPY'));
        $weight = new Mass(850, 'gram');

        $pricePerWeight = new Money(55, new Currency('JPY'));

        $this->setWeight($weight);
        $this->setPurchasePrice($price);
        $this->getPricePerWeight()->shouldBe($pricePerWeight);
    }
}
