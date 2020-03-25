<?php
/**
 * This file is part of the Volta Project.
 *
 * Copyright (c) 2018 - 2020. AzuyaLabs
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Sacha Telgenhof <me@sachatelgenhof.com>
 */

declare(strict_types=1);

namespace Volta\Domain\ValueObject\FilamentSpool;

use Volta\Domain\Exception\FilamentSpool\InvalidMaterialTypeException;

class MaterialType
{
    public const MATERIALTYPE_PLA  = 'PLA';
    public const MATERIALTYPE_ABS  = 'ABS';
    public const MATERIALTYPE_PETG = 'PETG';
    public const MATERIALTYPE_PP   = 'PP';

    private $value;

    public function __construct(string $value)
    {
        $this->value = $value;
        $this->validate();
    }

    private function validate(): void
    {
        $types = [
            self::MATERIALTYPE_ABS,
            self::MATERIALTYPE_PLA,
            self::MATERIALTYPE_PETG,
            self::MATERIALTYPE_PP,
        ];
        if (false === \in_array($this->value, $types, true)) {
            throw new InvalidMaterialTypeException();
        }
    }

    public function getValue(): string
    {
        return $this->value;
    }

    public function isEqual(MaterialType $type): bool
    {
        return $this->value === $type->value;
    }
}