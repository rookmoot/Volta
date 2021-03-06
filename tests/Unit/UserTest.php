<?php

declare(strict_types=1);
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

namespace Tests\Unit;

use App\User;
use Tests\TestCase;

/**
 * Class containing cases for testing the User class.
 *
 * @internal
 * @coversNothing
 */
class UserTest extends TestCase
{
    /** @test */
    public function itCanGenerateAnApiToken(): void
    {
        $user = factory(User::class)->create(['api_token' => null]);

        $this->assertNull($user->api_token); // Clear the token first

        $user->generateAPIToken();

        $this->assertIsString($user->api_token);
        $this->assertEquals(32, strlen($user->api_token));
    }
}
