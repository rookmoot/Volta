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

namespace Volta\Domain;

use Volta\Domain\ValueObject\Manufacturer\ManufacturerId;
use Volta\Domain\ValueObject\Manufacturer\ManufacturerName;

class Manufacturer
{
    /**
     * @var ManufacturerId
     */
    private $id;

    /**
     * @var ManufacturerName
     */
    private $name;

    private $filamentSupplier;

    private $equipmentSupplier;

    public function __construct(
        ManufacturerId $id,
        ManufacturerName $name,
        bool $filamentSupplier,
        bool $equipmentSupplier
    ) {
        $this->id                = $id;
        $this->name              = $name;
        $this->filamentSupplier  = $filamentSupplier;
        $this->equipmentSupplier = $equipmentSupplier;
    }

    public function isEquipmentSupplier(): bool
    {
        return $this->equipmentSupplier;
    }

    /**
     * @param bool $equipmentSupplier
     *
     * @return Manufacturer
     */
    public function setIsEquipmentSupplier(bool $equipmentSupplier): Manufacturer
    {
        $this->equipmentSupplier = $equipmentSupplier;
        return $this;
    }

    public function isFilamentSupplier(): bool
    {
        return $this->filamentSupplier;
    }

    /**
     * @param bool $filamentSupplier
     *
     * @return Manufacturer
     */
    public function setIsFilamentSupplier(bool $filamentSupplier): Manufacturer
    {
        $this->filamentSupplier = $filamentSupplier;
        return $this;
    }

    /**
     * @return ManufacturerName
     */
    public function getName(): ManufacturerName
    {
        return $this->name;
    }

    /**
     * @param ManufacturerName $name
     * @return Manufacturer
     */
    public function setName(ManufacturerName $name): Manufacturer
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return ManufacturerId
     */
    public function getId(): ManufacturerId
    {
        return $this->id;
    }

    /**
     * @param ManufacturerId $id
     * @return Manufacturer
     */
    public function setId(ManufacturerId $id): Manufacturer
    {
        $this->id = $id;
        return $this;
    }
}
